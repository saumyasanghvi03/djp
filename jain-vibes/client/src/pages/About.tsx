/**
 * About Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Mission, story, and Jain spiritual wellness principles
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  SectionHeader,
  PhilosophyBlock,
  Footer,
} from '@/components/JainVibesComponents';

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-features.png"
        title="About Jain Vibes"
        subtitle="Blending ancient Jain teachings with modern emotional wellness"
      />

      {/* ===== MISSION STATEMENT ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Our Mission"
            subtitle="Creating a space for Gen-Z to find peace through Jain wisdom"
          />
          <div className="max-w-3xl mx-auto">
            <p
              className="text-lg mb-6"
              style={{ color: 'rgb(150, 150, 150)' }}
            >
              Jain Vibes exists to bridge the gap between ancient Jain spiritual wisdom and the emotional wellness needs of today's generation. We believe that Gen-Z deserves access to authentic spiritual guidance that respects their values, speaks their language, and meets them where they are.
            </p>
            <p
              className="text-lg"
              style={{ color: 'rgb(150, 150, 150)' }}
            >
              By combining AI-powered coaching, devotional music, and structured spiritual practices rooted in Jain principles, Jain Vibes empowers young people to find clarity, balance, and inner peace in an increasingly complex world.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY JAIN VIBES EXISTS ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Why Jain Vibes Exists"
            subtitle="The story behind our creation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                The Challenge
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Gen-Z faces unprecedented levels of anxiety, depression, and existential uncertainty. While many turn to wellness apps, few find solutions that honor their spiritual heritage and cultural values. Jain youth, in particular, often feel disconnected from their spiritual roots while seeking modern support.
              </p>
            </div>
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                Our Response
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Jain Vibes was created to provide authentic, accessible, and culturally rooted emotional wellness support. We combine the timeless wisdom of Jainism with cutting-edge AI technology to create a space where young people can heal, grow, and connect with their spiritual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAIN SPIRITUAL WELLNESS PRINCIPLES ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Jain Spiritual Wellness Principles"
            subtitle="The foundation of everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <PhilosophyBlock
              title="Ahimsa"
              description="Non-violence toward all beings, starting with compassion toward yourself"
              icon="🕊️"
            />
            <PhilosophyBlock
              title="Aparigraha"
              description="Non-attachment and letting go of what no longer serves your growth"
              icon="🌸"
            />
            <PhilosophyBlock
              title="Awareness"
              description="Mindful presence and conscious observation of your inner world"
              icon="🧠"
            />
            <PhilosophyBlock
              title="Meditation"
              description="Deep inner peace through spiritual practice and contemplation"
              icon="🧘"
            />
            <PhilosophyBlock
              title="Purity"
              description="Spiritual clarity achieved through discipline and righteous living"
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* ===== CREATOR STORY ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Created by Saumya Sanghvi"
            subtitle="A passion project for spiritual wellness"
          />
          <div className="max-w-3xl mx-auto card-spiritual">
            <p
              className="mb-4"
              style={{ color: 'rgb(150, 150, 150)' }}
            >
              Jain Vibes is a project by Saumya Sanghvi, created with the intention of bringing authentic Jain spiritual wisdom to a new generation. Rooted in a deep personal commitment to Jain principles and a passion for emotional wellness, this platform represents years of research, spiritual practice, and technological innovation.
            </p>
            <p
              className="mb-4"
              style={{ color: 'rgb(150, 150, 150)' }}
            >
              Saumya's vision is to create a space where Gen-Z can find peace, clarity, and spiritual grounding without compromising their values or cultural identity. Every feature, every color choice, and every word on Jain Vibes has been carefully crafted to honor Jain traditions while speaking to the needs of today's young people.
            </p>
            <p
              style={{ color: 'rgb(150, 150, 150)' }}
            >
              Through Jain Vibes, we hope to inspire a generation to embrace their spiritual heritage, find inner peace, and contribute to a more compassionate, mindful world.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            subtitle="What guides every decision we make"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We honor Jain teachings with respect and integrity, never diluting or misrepresenting our spiritual foundation.',
                icon: '✓',
              },
              {
                title: 'Accessibility',
                description: 'Spiritual wellness should be available to everyone, regardless of background or experience level.',
                icon: '✓',
              },
              {
                title: 'Compassion',
                description: 'We approach every interaction with kindness, understanding, and deep respect for individual journeys.',
                icon: '✓',
              },
              {
                title: 'Innovation',
                description: 'We use technology to enhance spiritual practice, not replace it. AI serves wisdom, not the reverse.',
                icon: '✓',
              },
              {
                title: 'Community',
                description: 'We believe in the power of shared spiritual practice and supporting one another on the path to wellness.',
                icon: '✓',
              },
              {
                title: 'Growth',
                description: 'We are committed to continuous improvement, learning, and evolving to better serve our community.',
                icon: '✓',
              },
            ].map((value, i) => (
              <div key={i} className="card-spiritual">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                      {value.title}
                    </h4>
                    <p style={{ color: 'rgb(150, 150, 150)' }} className="text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
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
          <h2 className="text-white mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Be part of a movement bringing authentic Jain spiritual wisdom to Gen-Z. Start your journey with Jain Vibes today.
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
