/**
 * SOS Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * One-tap calming support with five-step grounding flow
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  SOSStep,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import { AlertCircle, Heart } from 'lucide-react';
import { useState } from 'react';

import EmergencySOS from '@/components/EmergencySOS';

export default function SOS() {
  const [, navigate] = useLocation();
  const [sosActive, setSosActive] = useState(false);
  const [mode, setMode] = useState<'calm' | 'emergency'>('calm');

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const sosSteps = [
    {
      step: 1,
      title: 'Breathing',
      description: 'Take slow, deep breaths. Inhale for 4 counts, hold for 4, exhale for 4. This calms your nervous system immediately.',
      icon: '🫁',
    },
    {
      step: 2,
      title: 'Chanting',
      description: 'Recite the Navkar Mantra or your chosen spiritual phrase. The vibrations ground you in spiritual truth.',
      icon: '📿',
    },
    {
      step: 3,
      title: 'Grounding',
      description: 'Feel your feet on the ground. Notice 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste.',
      icon: '🌍',
    },
    {
      step: 4,
      title: 'Reassurance',
      description: 'Remind yourself: "This feeling is temporary. I am safe. I am grounded in my spiritual practice."',
      icon: '💫',
    },
    {
      step: 5,
      title: 'Continue',
      description: 'Return to your day with renewed clarity. Practice self-compassion and reach out for support if needed.',
      icon: '✨',
    },
  ];

  const groundingTechniques = [
    'Progressive muscle relaxation',
    'Cold water on face or wrists',
    'Holding ice cubes',
    'Pressing feet firmly into ground',
    'Counting backward from 100',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-sos.png"
        title="One-Tap Support"
        subtitle="Instant peace or emergency assistance when you need it most"
      />

      {/* ===== MODE TOGGLE ===== */}
      <div className="container py-8 flex justify-center">
        <div className="bg-stone-100 p-1 rounded-full flex gap-1">
          <button
            onClick={() => setMode('calm')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${mode === 'calm'
              ? 'bg-white text-stone-800 shadow-sm'
              : 'text-stone-500 hover:text-stone-700'
              }`}
          >
            Calm Mode
          </button>
          <button
            onClick={() => setMode('emergency')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${mode === 'emergency'
              ? 'bg-red-600 text-white shadow-sm'
              : 'text-stone-500 hover:text-red-600'
              }`}
          >
            <AlertCircle size={16} /> Emergency Mode
          </button>
        </div>
      </div>

      {mode === 'emergency' ? (
        <section className="section-spacing pt-0">
          <div className="container">
            <EmergencySOS />
          </div>
        </section>
      ) : (
        <>
          {/* ===== LARGE SOS BUTTON ===== */}
          <section className="section-spacing bg-white pt-0">
            <div className="container text-center">
              <SectionHeader
                title="Need Help Right Now?"
                subtitle="Activate our five-step calming process"
              />
              <button
                onClick={() => handleNavigate('/app?tab=SOS')}
                className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold transition-all duration-300 hover:scale-110 shadow-lg mx-auto animate-pulse"
                style={{
                  backgroundColor: 'rgb(220, 38, 38)',
                  color: 'white',
                }}
              >
                SOS
              </button>
              <p className="mt-6" style={{ color: 'rgb(150, 150, 150)' }}>
                Tap the button to activate immediate support
              </p>
            </div>
          </section>

          {/* ===== FIVE-STEP CALMING FLOW ===== */}
          <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
            <div className="container">
              <SectionHeader
                title="Five-Step Calming Flow"
                subtitle="A guided process to restore peace and clarity"
              />
              <div className="max-w-2xl mx-auto">
                {sosSteps.map((step) => (
                  <SOSStep
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== CRISIS SAFE MODE ===== */}
          <section className="section-spacing bg-white">
            <div className="container">
              <div
                className="card-spiritual border-l-4"
                style={{ borderColor: 'rgb(115, 55, 55)' }}
              >
                <div className="flex items-start gap-4">
                  <AlertCircle
                    size={32}
                    style={{ color: 'rgb(115, 55, 55)' }}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                      Crisis Safe Mode
                    </h3>
                    <p style={{ color: 'rgb(150, 150, 150)' }} className="mb-4">
                      If you are experiencing a mental health crisis or having thoughts of self-harm, please reach out to professional help immediately.
                    </p>
                    <div className="space-y-2">
                      <p style={{ color: 'rgb(150, 150, 150)' }}>
                        <strong>24/7 India Mental Health Support</strong><br />
                        Tele MANAS (Government of India): 14416
                      </p>
                      <p style={{ color: 'rgb(150, 150, 150)' }}>
                        <strong>NGO Helplines</strong><br />
                        Vandrevala Foundation: +91 9999 666 555
                      </p>
                      <p style={{ color: 'rgb(150, 150, 150)' }}>
                        <strong>Emergency Services</strong><br />
                        For any immediate danger: Call 112
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => handleNavigate('/app')}
                  className="button-spiritual"
                >
                  Start Guided SOS Flow
                </button>
              </div>
            </div>
          </section>

          {/* ===== GROUNDING TECHNIQUES ===== */}
          <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
            <div className="container">
              <SectionHeader
                title="Additional Grounding Techniques"
                subtitle="Try these methods when you need extra support"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groundingTechniques.map((technique, index) => (
                  <div
                    key={index}
                    className="card-spiritual flex items-center gap-4"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ color: 'rgb(95, 90, 85)' }} className="font-medium">
                      {technique}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== WHEN TO USE SOS ===== */}
          <section className="section-spacing bg-white">
            <div className="container">
              <SectionHeader
                title="When to Use SOS"
                subtitle="Recognize when you need immediate support"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                    Use SOS When You Feel:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Overwhelming anxiety or panic',
                      'Intense emotional pain',
                      'Racing thoughts you cannot control',
                      'Physical symptoms of stress',
                      'Sudden waves of sadness or anger',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ color: 'rgb(150, 150, 150)' }}>
                        <span style={{ color: 'rgb(223, 196, 158)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                    For Ongoing Support:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Use your AI Coach in Anxiety Shield Mode',
                      'Practice daily meditation and rituals',
                      'Engage with calming music playlists',
                      'Journal your thoughts and feelings',
                      'Reach out to trusted friends or professionals',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ color: 'rgb(150, 150, 150)' }}>
                        <span style={{ color: 'rgb(223, 196, 158)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ===== SELF-CARE REMINDERS ===== */}
          <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
            <div className="container">
              <SectionHeader
                title="Remember: You Are Not Alone"
                subtitle="Compassionate reminders for your journey"
              />
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  'Your feelings are valid and temporary. This moment will pass.',
                  'Reaching out for help is a sign of strength, not weakness.',
                  'You deserve compassion, especially from yourself.',
                  'Every breath brings you closer to peace.',
                  'Your spiritual practice is always available to you.',
                  'Crisis is temporary. Your resilience is permanent.',
                ].map((reminder, i) => (
                  <div
                    key={i}
                    className="card-spiritual flex items-start gap-4"
                  >
                    <Heart
                      size={20}
                      style={{ color: 'rgb(115, 55, 55)', marginTop: '2px' }}
                      className="flex-shrink-0"
                    />
                    <p style={{ color: 'rgb(95, 90, 85)' }} className="italic">
                      {reminder}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CLOSING CTA ===== */}
          <section
            className="section-spacing text-center text-white"
            style={{ backgroundColor: 'rgb(115, 55, 55)' }}
          >
            <div className="container">
              <h2 className="text-white mb-4">You Are Stronger Than You Think</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Use Jain Vibes as your companion through every moment. Whether you need immediate support or ongoing guidance, we are here for you.
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
                style={{ color: 'rgb(115, 55, 55)' }}
              >
                Back to Home
              </button>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <Footer />
        </>
      )}
    </div>
  );
}
