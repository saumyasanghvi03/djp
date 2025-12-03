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
      description: 'Start your day with peaceful devotion and spiritual awakening',
      trackCount: 12,
      duration: '45 min',
      tracks: ['Navkar Mantra', 'Lotus Meditation', 'Dawn Chant', 'Morning Blessing'],
    },
    {
      title: 'Focus and Study',
      description: 'Enhance concentration with spiritual music for deep work',
      trackCount: 15,
      duration: '60 min',
      tracks: ['Concentration Flow', 'Mind Clarity', 'Study Blessing', 'Focus Mantra'],
    },
    {
      title: 'Girnar and Neminath Devotion',
      description: 'Sacred mountain chants honoring Girnar and Lord Neminath',
      trackCount: 10,
      duration: '40 min',
      tracks: ['Girnar Hymn', 'Neminath Prayer', 'Mountain Echo', 'Sacred Peak'],
    },
    {
      title: 'Bhajan Club',
      description: 'Uplifting devotional songs for spiritual joy and celebration',
      trackCount: 14,
      duration: '55 min',
      tracks: ['Joy Bhajan', 'Celebration Chant', 'Devotional Song', 'Spiritual Dance'],
    },
    {
      title: 'Aadinath Grounding',
      description: 'Root yourself with ancient chants of the first Tirthankara',
      trackCount: 11,
      duration: '50 min',
      tracks: ['Aadinath Prayer', 'Root Mantra', 'Earth Connection', 'Grounding Chant'],
    },
    {
      title: 'Night Calm Down',
      description: 'Wind down peacefully with soothing mantras and night rituals',
      trackCount: 13,
      duration: '52 min',
      tracks: ['Evening Prayer', 'Sleep Meditation', 'Night Blessing', 'Rest Mantra'],
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
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-music.png"
        title="Jain Music Engine"
        subtitle="Mood-based devotional playlists for emotional healing"
      />

      {/* ===== PLAYLIST GRID ===== */}
      <section className="section-spacing bg-white">
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
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
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
      <section className="section-spacing bg-white">
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
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container text-center">
          <SectionHeader
            title="Listen Everywhere"
            subtitle="Access Jain Vibes music on your favorite platforms"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="button-spiritual">
              Spotify
            </button>
            <button className="button-spiritual">
              Apple Music
            </button>
            <button className="button-spiritual">
              YouTube Music
            </button>
            <button className="button-spiritual">
              Amazon Music
            </button>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section
        className="section-spacing text-center text-white"
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
