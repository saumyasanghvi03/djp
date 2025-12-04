/**
 * Music Engine Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Mood-based devotional playlists and music features
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  PlaylistCard,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import { Music as MusicIcon, Play } from 'lucide-react';

export default function Music() {
  const [, navigate] = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const playlists = [
    {
      title: 'Morning Calm',
      description: 'Start your day with purity and grounding.',
      trackCount: 3,
      duration: '15 min',
      tracks: ['Navkar Mantra - RSJ', 'Nem Aavshe - Vilesh Jain', 'Parmatma Bani Jase Maro Aatma'],
    },
    {
      title: 'Focus / Study',
      description: 'LoFi-style Jain chants for study and deadlines.',
      trackCount: 3,
      duration: '12 min',
      tracks: ['Navkar LoFi', 'Namami Nemi (Soft)', 'Chowk Puravo Calm Mix'],
    },
    {
      title: 'Girnar & Neminath Devotion',
      description: 'High-bhakti, high-intensity devotional power.',
      trackCount: 3,
      duration: '18 min',
      tracks: ['Girnare Shree Prabhu Nem Che', 'Rome Rome Nemi No', 'Nemras'],
    },
    {
      title: 'Bhajan Clubbing',
      description: 'High-energy spiritual tracks for walks & vibes.',
      trackCount: 3,
      duration: '14 min',
      tracks: ['Jhume Re Jhume Anande', 'Musafari', 'Radha Se Kanha Saiyaara'],
    },
    {
      title: 'Aadinath Grounding',
      description: 'Gentle, emotional, father-like devotion.',
      trackCount: 3,
      duration: '16 min',
      tracks: ['Vhala Aadinath', 'Jeni Kiki Kali Che', 'O Mara Rupala Bhagwan'],
    },
    {
      title: 'Night Calm Down',
      description: 'End your day with softness & surrender.',
      trackCount: 3,
      duration: '20 min',
      tracks: ['Nemras Soft Mix', 'Chowk Puravo', 'Dur Dur Thi Tara Darbare'],
    },
  ];

  const trackHighlights = [
    'Navkar Mantra - The universal Jain prayer',
    'Aarti - Ritual of light and devotion',
    'Samayik - Meditation on equanimity',
    'Pratikraman - Reflection and forgiveness',
    'Bhakti Bhajans - Songs of devotion',
    'Chanting Rituals - Sacred sound practices',
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-music.png"
        title="Jain Music Engine"
        subtitle="Mood-based devotional playlists for emotional healing"
      />

      {/* ===== PLAYLIST GRID ===== */}
      <section className="section-spacing glass-panel mx-4 md:mx-8 rounded-3xl my-8">
        <div className="container">
          <SectionHeader
            title="Curated Playlists"
            subtitle="Find the perfect music for every moment of your day"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <PlaylistCard
                key={index}
                title={playlist.title}
                description={playlist.description}
                trackCount={playlist.trackCount}
                duration={playlist.duration}
                tracks={playlist.tracks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRACK HIGHLIGHTS ===== */}
      <section className="section-spacing glass-panel mx-4 md:mx-8 rounded-3xl my-8">
        <div className="container">
          <SectionHeader
            title="Featured Tracks"
            subtitle="Essential Jain devotional music and spiritual practices"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackHighlights.map((track, index) => (
              <div
                key={index}
                className="card-spiritual flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                >
                  <MusicIcon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p style={{ color: 'rgb(95, 90, 85)' }} className="font-medium">
                    {track}
                  </p>
                </div>
                <button
                  className="flex-shrink-0 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                >
                  <Play size={16} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MUSIC BENEFITS ===== */}
      <section className="section-spacing glass-panel mx-4 md:mx-8 rounded-3xl my-8">
        <div className="container">
          <SectionHeader
            title="Why Jain Music Heals"
            subtitle="The spiritual science behind devotional sound"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🎵
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Vibrational Healing
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Sacred mantras and chants create healing vibrations that calm the mind and elevate consciousness
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🧘
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Spiritual Connection
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Connect with Jain principles and ancient wisdom through devotional music and sacred sounds
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                💆
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Emotional Release
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Music helps process emotions, reduce stress, and achieve inner peace and clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXTERNAL MUSIC LINKS ===== */}
      <section className="section-spacing glass-panel mx-4 md:mx-8 rounded-3xl my-8">
        <div className="container text-center">
          <SectionHeader
            title="Pick Your Mood"
            subtitle="I’ll choose your music."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Morning Calm', id: 'morning_calm', emoji: '🌅' },
              { name: 'Focus / Study', id: 'focus_lite', emoji: '🧠' },
              { name: 'Devotion', id: 'girnar_energy', emoji: '🙏' },
              { name: 'Energy', id: 'genz_bhajan_club', emoji: '⚡' },
              { name: 'Grounding', id: 'adinath_ground', emoji: '🌳' },
              { name: 'Sleep', id: 'night_calm', emoji: '🌙' },
            ].map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleNavigate(`/app?music_mood=${mood.id}`)}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group bg-white"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{mood.emoji}</span>
                <span className="font-medium text-stone-700">{mood.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section
        className="section-spacing text-center text-white mx-4 md:mx-8 rounded-3xl my-8"
        style={{ backgroundColor: 'rgb(115, 55, 55)' }}
      >
        <div className="container">
          <h2 className="text-white mb-4">Discover Your Healing Soundtrack</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let the power of Jain devotional music guide you toward peace, clarity, and spiritual awakening.
          </p>
          <button
            onClick={() => navigate('/app')}
            className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
            style={{ color: 'rgb(115, 55, 55)' }}
          >
            Explore More
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
