/**
 * Features Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Complete feature grid with all tools and capabilities
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  FeatureCard,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import {
  Brain,
  Music,
  BookOpen,
  Mic,
  Shield,
  Calendar,
  AlertCircle,
  Lightbulb,
  Heart,
  Zap,
} from 'lucide-react';

export default function Features() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: <Brain size={24} />,
      title: 'AI Jain Spiritual Coach',
      description: 'Personalized guidance in multiple modes tailored to your emotional needs and spiritual journey.',
    },
    {
      icon: <Music size={24} />,
      title: 'Jain Music Engine',
      description: 'Mood-based devotional playlists with Navkar mantras, bhajans, and calming chants.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Mood Log & Journaling',
      description: 'Track your emotional patterns and express yourself through guided spiritual journaling.',
    },
    {
      icon: <Mic size={24} />,
      title: 'Voice Mode',
      description: 'Speak naturally with your AI coach for a more intimate, conversational experience.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Exam Mode',
      description: 'Specialized support for managing stress and maintaining focus during important exams.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Crisis Safe Mode',
      description: 'Immediate, compassionate support when you need it most with grounding techniques.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Prebuilt Wellness Kits',
      description: 'Curated collections of practices, meditations, and rituals for specific situations.',
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'One-Tap SOS',
      description: 'Instant access to a five-step calming process for moments of overwhelming stress.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Daily Rituals',
      description: 'Guided daily practices rooted in Jain principles for consistent spiritual growth.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Personalized Recommendations',
      description: 'AI-powered suggestions based on your mood, preferences, and spiritual progress.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-features.png"
        title="Explore the Features"
        subtitle="Tools for clarity, balance, and spiritual grounding"
      />

      {/* ===== FEATURES GRID ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Complete Feature Set"
            subtitle="Everything you need for spiritual wellness and emotional balance"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== JAIN PHILOSOPHY SECTION ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Rooted in Jain Principles"
            subtitle="Ancient wisdom for modern emotional wellness"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🕊️
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Ahimsa
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Non-violence toward yourself and others through compassionate practices
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🌸
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Aparigraha
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Non-attachment and letting go of what no longer serves you
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🧠
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Awareness
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Mindful presence and conscious observation of thoughts and emotions
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
                Meditation
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Deep inner peace through guided spiritual meditation practices
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                ✨
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Purity
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Spiritual clarity through discipline and righteous living
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section
        className="section-spacing text-center text-white"
        style={{ backgroundColor: 'rgb(115, 55, 55)' }}
      >
        <div className="container">
          <h2 className="text-white mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the power of Jain spiritual wisdom combined with modern emotional wellness technology.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
            style={{ color: 'rgb(115, 55, 55)' }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
