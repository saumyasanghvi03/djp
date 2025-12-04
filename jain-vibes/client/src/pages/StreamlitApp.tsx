import { useLocation } from 'wouter';
import { Navigation } from '@/components/JainVibesComponents';

export default function StreamlitApp() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex-1 w-full h-full relative">
                <iframe
                    src={`http://localhost:8501/?embed=true${window.location.search.replace('?', '&')}`}
                    title="Jain Vibes App"
                    className="w-full h-[calc(100vh-64px)] border-none"
                    allow="camera; microphone; clipboard-read; clipboard-write;"
                />
            </div>
        </div>
    );
}
