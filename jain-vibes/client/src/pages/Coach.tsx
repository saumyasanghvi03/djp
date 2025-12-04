/**
 * Coach Modes Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * 8 different AI coaching modes for various emotional needs
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  CoachModeCard,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';

export default function Coach() {
  const [, navigate] = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const coachModes = [
    {
      id: 'friendly',
      name: 'Friendly Mode',
      description: 'Warm, approachable guidance for everyday support and encouragement',
      emoji: '😊',
    },
    {
      id: 'romantic',
      name: 'Romantic Mode',
      description: 'Gentle, compassionate support for matters of the heart',
      emoji: '💕',
    },
    {
      id: 'soulmate',
      name: 'Soulmate Mode',
      description: 'Deep, empathetic connection and profound understanding',
      emoji: '💫',
    },
    {
      id: 'coach',
      name: 'Coach Mode',
      description: 'Direct, motivational support for discipline and achievement',
      emoji: '🎯',
    },
    {
      id: 'hype',
      name: 'Hype Mode',
      description: 'Energetic, uplifting support to boost confidence and excitement',
      emoji: '🔥',
    },
    {
      id: 'anxiety',
      name: 'Anxiety Shield Mode',
      description: 'Specialized support for managing anxiety and panic',
      emoji: '🛡️',
    },
    {
      id: 'exam',
      name: 'Exam Mode',
      description: 'Focused guidance for managing stress during important exams',
      emoji: '📚',
    },
    {
      id: 'prevention',
      name: 'Crisis Safe Mode',
      description: 'Immediate, compassionate support during emotional emergencies',
      emoji: '🆘',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-features.png"
        title="Meet Your AI Coaches"
        subtitle="Choose the guidance style that fits your emotional needs"
      />

      {/* ===== COACH MODES GRID ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="8 Coaching Modes"
            subtitle="Each designed for specific emotional situations and needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachModes.map((mode, index) => (
              <div key={index} className="relative">
                <CoachModeCard
                  name={mode.name}
                  description={mode.description}
                  emoji={mode.emoji}
                />
                <button
                  onClick={() => handleNavigate(`/app?mode=${mode.id}`)}
                  className="absolute bottom-6 right-6 text-sm font-medium underline hover:text-gray-600 transition-colors"
                  style={{ color: 'rgb(115, 55, 55)' }}
                >
                  Choose Mode
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODE DETAILS SECTION ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="How to Choose Your Coach"
            subtitle="Select the mode that resonates with your current emotional state"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                For Daily Support
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                Use <strong>Friendly Mode</strong> for everyday encouragement and <strong>Coach Mode</strong> for motivation and discipline.
              </p>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                These modes provide consistent, grounded guidance for your regular wellness practices.
              </p>
            </div>
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                For Emotional Challenges
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                Choose <strong>Anxiety Shield Mode</strong> for anxiety management or <strong>Crisis Safe Mode</strong> for urgent support.
              </p>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                These specialized modes provide targeted techniques for difficult emotional moments.
              </p>
            </div>
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                For Specific Situations
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                Select <strong>Exam Mode</strong> during academic stress or <strong>Romantic Mode</strong> for relationship guidance.
              </p>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Context-specific modes adapt to your unique circumstances and needs.
              </p>
            </div>
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                For Inspiration
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                Try <strong>Hype Mode</strong> for energy and confidence, or <strong>Soulmate Mode</strong> for deep connection.
              </p>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                These modes elevate your mood and deepen your spiritual connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI TECHNOLOGY ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Powered by Jain Wisdom & AI"
            subtitle="Combining ancient spiritual principles with modern technology"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🧠
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Intelligent Adaptation
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Our AI learns your patterns and adapts its guidance to your unique emotional needs over time
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                📿
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Spiritual Grounding
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Every coaching session is rooted in authentic Jain principles and spiritual wisdom
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                💬
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Natural Conversation
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Chat naturally with your coach using text or voice for a truly personalized experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOICE MODE FEATURE ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <div className="card-spiritual max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🎤
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                  Voice Mode Available
                </h3>
                <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                  Speak naturally with your AI coach for a more intimate and conversational experience. Our voice technology understands your tone and emotion for more personalized guidance.
                </p>
                <button
                  className="button-spiritual"
                  onClick={() => window.open('http://localhost:8501', '_blank')}
                >
                  Try Voice Mode
                </button>
              </div>
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
          <h2 className="text-white mb-4">Ready to Meet Your Guide?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Start a conversation today and experience the wisdom of Jain teachings tailored to your life.
          </p>
          <button
            onClick={() => handleNavigate('/app')}
            className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
            style={{ color: 'rgb(115, 55, 55)' }}
          >
            Launch AI Coach
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
