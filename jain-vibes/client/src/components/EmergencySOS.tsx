import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
    AlertCircle,
    Camera,
    Mic,
    MapPin,
    Save,
    RefreshCw,
    Shield,
    Phone,
    Video,
    CheckCircle,
    XCircle,
    Info
} from 'lucide-react';
import L from 'leaflet';

// Fix for Leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Helper component to update map view
function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, 15);
    }, [center, map]);
    return null;
}

export default function EmergencySOS() {
    const [isSOSActive, setIsSOSActive] = useState(false);
    const [status, setStatus] = useState('Ready');
    const [location, setLocation] = useState<{ lat: number, lng: number, accuracy: number } | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);
    const [audio, setAudio] = useState<string | null>(null);
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [permissions, setPermissions] = useState({
        location: 'pending',
        camera: 'pending',
        microphone: 'pending'
    });
    const [countdown, setCountdown] = useState<number | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    // Initialize permissions check
    useEffect(() => {
        checkPermissions();
        return () => {
            // Cleanup streams
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const checkPermissions = async () => {
        try {
            const loc = await navigator.permissions.query({ name: 'geolocation' });
            const cam = await navigator.permissions.query({ name: 'camera' as any });
            const mic = await navigator.permissions.query({ name: 'microphone' as any });

            setPermissions({
                location: loc.state,
                camera: cam.state,
                microphone: mic.state
            });
        } catch (e) {
            console.log('Permission query not supported', e);
        }
    };

    const requestPermissions = async () => {
        try {
            // Location
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                        accuracy: pos.coords.accuracy
                    });
                    setPermissions(prev => ({ ...prev, location: 'granted' }));
                },
                () => setPermissions(prev => ({ ...prev, location: 'denied' }))
            );

            // Camera & Mic
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setPermissions(prev => ({ ...prev, camera: 'granted', microphone: 'granted' }));

            // Stop tracks immediately after check
            stream.getTracks().forEach(track => track.stop());

        } catch (e) {
            console.error('Error requesting permissions', e);
        }
    };

    const activateSOS = async () => {
        if (isSOSActive) return;

        setIsSOSActive(true);
        setStatus('EMERGENCY ACTIVE - Capturing Data...');
        const now = new Date().toISOString();
        setTimestamp(now); // Always capture time first

        // 1. Capture Location
        try {
            await new Promise<void>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        setLocation({
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude,
                            accuracy: pos.coords.accuracy
                        });
                        resolve();
                    },
                    (err) => reject(err),
                    { enableHighAccuracy: true, timeout: 5000 }
                );
            });
        } catch (e) {
            console.error('Location capture failed', e);
        }

        // 2. Capture Photo
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            streamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for camera to initialize

                const canvas = document.createElement('canvas');
                canvas.width = videoRef.current.videoWidth;
                canvas.height = videoRef.current.videoHeight;
                canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
                setPhoto(canvas.toDataURL('image/jpeg'));

                // Stop video track but keep audio if needed
                stream.getVideoTracks().forEach(track => track.stop());
            }
        } catch (e) {
            console.error('Photo capture failed', e);
        }

        // 3. Record Audio (5 seconds)
        try {
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(audioStream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                setAudio(URL.createObjectURL(audioBlob));
                audioStream.getTracks().forEach(track => track.stop());
                setIsSOSActive(false);
                setStatus('Data Captured - Safe to Save');
            };

            mediaRecorder.start();
            setCountdown(5);

            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        clearInterval(timer);
                        mediaRecorder.stop();
                        return null;
                    }
                    return prev ? prev - 1 : null;
                });
            }, 1000);

        } catch (e) {
            console.error('Audio recording failed', e);
            setIsSOSActive(false);
            setStatus('Partial Data Captured');
        }
    };

    const saveData = () => {
        const data = {
            timestamp: timestamp || new Date().toISOString(), // Fallback if even initial capture failed
            location,
            photo: photo ? 'Captured (Base64)' : 'Failed',
            audio: audio ? 'Captured (Blob)' : 'Failed',
            photoData: photo, // In real app, might upload this
            deviceInfo: navigator.userAgent
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sos-data-${new Date().getTime()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const resetData = () => {
        setLocation(null);
        setPhoto(null);
        setAudio(null);
        setTimestamp(null);
        setStatus('Ready');
        setIsSOSActive(false);
    };

    return (
        <div className="bg-slate-900 text-slate-50 p-6 rounded-3xl shadow-2xl border border-slate-700 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-2">
                    <Shield className="text-red-500" size={32} />
                    SOS Emergency System
                </h2>
                <p className="text-slate-400">
                    Securely capture location, photo, and audio evidence locally.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Map & Info */}
                <div className="space-y-6">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <MapPin className="text-blue-500" /> Live Location
                        </h3>
                        <div className="h-64 rounded-lg overflow-hidden bg-slate-950 relative z-0">
                            {location ? (
                                <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: '100%', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; OpenStreetMap contributors'
                                    />
                                    <Marker position={[location.lat, location.lng]}>
                                        <Popup>You are here</Popup>
                                    </Marker>
                                    <MapUpdater center={[location.lat, location.lng]} />
                                </MapContainer>
                            ) : (
                                <div className="h-full flex items-center justify-center text-slate-500">
                                    <p>Location not acquired</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-slate-900 p-3 rounded-lg border-l-4 border-blue-500">
                                <p className="text-slate-400">Coordinates</p>
                                <p className="font-mono">{location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : '--'}</p>
                            </div>
                            <div className="bg-slate-900 p-3 rounded-lg border-l-4 border-green-500">
                                <p className="text-slate-400">Status</p>
                                <p className={isSOSActive ? 'text-red-500 animate-pulse font-bold' : 'text-green-500'}>{status}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <h3 className="text-lg font-semibold mb-3">Permissions</h3>
                        <div className="space-y-2">
                            {Object.entries(permissions).map(([key, val]) => (
                                <div key={key} className="flex items-center justify-between bg-slate-900 p-2 rounded">
                                    <span className="capitalize">{key}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${val === 'granted' ? 'bg-green-900 text-green-300' :
                                            val === 'denied' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
                                        }`}>
                                        {val}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={requestPermissions}
                            className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
                        >
                            Request All Permissions
                        </button>
                    </div>
                </div>

                {/* Right Column: SOS Button & Capture */}
                <div className="space-y-6">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg flex flex-col items-center">
                        <button
                            onClick={activateSOS}
                            disabled={isSOSActive}
                            className={`w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)] ${isSOSActive
                                    ? 'bg-red-600 scale-95 ring-4 ring-red-900'
                                    : 'bg-gradient-to-br from-red-500 to-red-700 hover:scale-105 hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]'
                                }`}
                        >
                            <span className="text-4xl font-black text-white mb-2">SOS</span>
                            {isSOSActive && countdown !== null && (
                                <span className="text-2xl font-bold text-white animate-pulse">
                                    Recording {countdown}s
                                </span>
                            )}
                        </button>
                        <p className="mt-6 text-slate-400 text-center max-w-xs text-sm">
                            Press to instantly capture location, photo, and 5s audio.
                            <br />
                            <span className="text-xs text-slate-500 block mt-2">
                                *Date & Time are always captured as fallback.
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                                <Camera size={16} /> Photo
                            </h4>
                            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className={`w-full h-full object-cover ${photo ? 'hidden' : 'block'}`}
                                />
                                {photo && <img src={photo} alt="Captured" className="w-full h-full object-cover" />}
                                {!photo && !isSOSActive && (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                        <Camera size={24} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                                <Mic size={16} /> Audio
                            </h4>
                            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                                {audio ? (
                                    <audio controls src={audio} className="w-full px-2" />
                                ) : (
                                    <div className="flex flex-col items-center text-slate-600">
                                        <Mic size={24} />
                                        {isSOSActive && <div className="w-full h-1 bg-red-500 absolute bottom-0 animate-pulse" />}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={saveData}
                            disabled={!timestamp}
                            className="flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                            <Save size={18} /> Save Evidence
                        </button>
                        <button
                            onClick={resetData}
                            className="px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold transition-colors"
                        >
                            <RefreshCw size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>This system runs locally in your browser. No data is sent to external servers unless you explicitly share it.</p>
            </div>
        </div>
    );
}
