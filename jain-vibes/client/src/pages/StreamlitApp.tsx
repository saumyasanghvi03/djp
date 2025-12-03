import { useLocation } from 'wouter';
import { Navigation } from '@/components/JainVibesComponents';

export default function StreamlitApp() {
    const [location, navigate] = useLocation();

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'AI Coach', href: '/coach' },
        { label: 'Music', href: '/music' },
        { label: '30-Day Challenge', href: '/30day' },
        { label: 'SOS', href: '/sos' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation
                links={navLinks}
                currentPath={location}
                onNavigate={navigate}
            />
            <div className="flex-1 w-full h-full relative">
                <iframe
                    src="http://localhost:8501/?embed=true"
                    title="Jain Vibes App"
                    className="w-full h-[calc(100vh-64px)] border-none"
                    allow="camera; microphone; clipboard-read; clipboard-write;"
                />
            </div>
        </div>
    );
}
