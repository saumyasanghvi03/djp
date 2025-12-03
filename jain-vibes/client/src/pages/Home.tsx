/**
 * Home Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Hero with features overview, AI coach modes preview, music engine preview, 30-day challenge preview
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  FeatureCard,
  CoachModeCard,
  PlaylistCard,
  ChallengeDayCard,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import {
  Heart,
  Music,
  BookOpen,
  Mic,
  Brain,
  Shield,
  Calendar,
  AlertCircle,
} from 'lucide-react';

export default function Home() {
  const [, navigate] = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-home.png"
        title="Jain Vibes"
        subtitle="A Jain Emotional Wellness Companion for Today's Generation"
        primaryCTA={{
          text: 'Start Jain Vibes',
          onClick: () => handleNavigate('/app'),
        }}
        secondaryCTA={{
          text: 'Explore Features',
          onClick: () => handleNavigate('/features'),
        }}
      />

      {/* ===== THREE-FEATURE OVERVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Why Jain Vibes?"
            subtitle="Tools for clarity, balance, and spiritual grounding"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain size={24} />}
              title="AI Spiritual Coach"
              description="Personalized guidance in 8 different modes to match your emotional needs and spiritual journey."
              onClick={() => handleNavigate('/coach')}
            />
            <FeatureCard
              icon={<Music size={24} />}
              title="Jain Music Engine"
              description="Mood-based devotional playlists featuring Navkar mantras, bhajans, and calming chants."
              onClick={() => handleNavigate('/music')}
            />
            <FeatureCard
              icon={<Calendar size={24} />}
              title="30-Day Healing Challenge"
              description="A structured spiritual journey with daily rituals, journaling, and progressive discipline."
              onClick={() => handleNavigate('/30day')}
            />
          </div>
        </div>
      </section>

      {/* ===== AI COACH MODES PREVIEW ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Meet Your AI Coaches"
            subtitle="Choose the guidance style that fits your emotional needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CoachModeCard
              name="Friendly Mode"
              description="Warm, approachable guidance for everyday support"
              emoji="😊"
              onClick={() => handleNavigate('/coach')}
            />
            <CoachModeCard
              name="Coach Mode"
              description="Direct, motivational support for discipline"
              emoji="🎯"
              onClick={() => handleNavigate('/coach')}
            />
            <CoachModeCard
              name="Soulmate Mode"
              description="Deep, empathetic connection and understanding"
              emoji="💫"
              onClick={() => handleNavigate('/coach')}
            />
            <CoachModeCard
              name="Anxiety Shield"
              description="Specialized support for managing anxiety"
              emoji="🛡️"
              onClick={() => handleNavigate('/coach')}
            />
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/coach')}
              className="button-spiritual"
            >
              Explore All Coach Modes
            </button>
          </div>
        </div>
      </section>

      {/* ===== MUSIC ENGINE PREVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Jain Music Engine"
            subtitle="Mood-based devotional playlists for emotional healing"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlaylistCard
              title="Morning Calm"
              description="Start your day with peaceful devotion"
              trackCount={12}
              duration="45 min"
              onClick={() => handleNavigate('/music')}
            />
            <PlaylistCard
              title="Focus and Study"
              description="Enhance concentration with spiritual music"
              trackCount={15}
              duration="60 min"
              onClick={() => handleNavigate('/music')}
            />
            <PlaylistCard
              title="Girnar Devotion"
              description="Sacred mountain chants and bhajans"
              trackCount={10}
              duration="40 min"
              onClick={() => handleNavigate('/music')}
            />
            <PlaylistCard
              title="Bhajan Club"
              description="Uplifting devotional songs"
              trackCount={14}
              duration="55 min"
              onClick={() => handleNavigate('/music')}
            />
            <PlaylistCard
              title="Aadinath Grounding"
              description="Root yourself with ancient chants"
              trackCount={11}
              duration="50 min"
              onClick={() => handleNavigate('/music')}
            />
            <PlaylistCard
              title="Night Calm Down"
              description="Wind down with peaceful mantras"
              trackCount={13}
              duration="52 min"
              onClick={() => handleNavigate('/music')}
            />
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/music')}
              className="button-spiritual"
            >
              Explore All Playlists
            </button>
          </div>
        </div>
      </section>

      {/* ===== 30-DAY CHALLENGE PREVIEW ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="The 30-Day Jain Healing Challenge"
            subtitle="A disciplined journey toward purity and inner clarity"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
            {['Intention', 'Mindfulness', 'Gratitude', 'Kindness', 'Detox', 'Eating', 'Forgiveness'].map((ritual, i) => (
              <ChallengeDayCard
                key={i}
                day={i + 1}
                title={`Day ${i + 1}`}
                ritual={ritual}
                completed={i < 2}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/30day')}
              className="button-spiritual"
            >
              Start the 30-Day Challenge
            </button>
          </div>
        </div>
      </section>

      {/* ===== ONE-TAP SOS SECTION ===== */}
      <section className="section-spacing bg-white">
        <div className="container text-center">
          <SectionHeader
            title="One-Tap Calm"
            subtitle="Instant peace when your mind feels overwhelmed"
          />
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'rgb(150, 150, 150)' }}
          >
            When you need immediate support, our SOS feature guides you through a five-step calming process using breathing, chanting, and grounding techniques.
          </p>
          <button
            onClick={() => handleNavigate('/app')}
            className="button-spiritual"
          >
            Access SOS Support
          </button>
        </div>
      </section>

      {/* ===== CALL-TO-ACTION PANEL ===== */}
      <section
        className="section-spacing text-center text-white"
        style={{ backgroundColor: 'rgb(115, 55, 55)' }}
      >
        <div className="container">
          <h2 className="text-white mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Gen-Z users finding peace, clarity, and spiritual balance through Jain wisdom.
          </p>
          <button
            onClick={() => handleNavigate('/app')}
            className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
            style={{ color: 'rgb(115, 55, 55)' }}
          >
            Start Jain Vibes Today
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
