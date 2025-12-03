/**
 * 30-Day Challenge Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Structured spiritual journey with weekly themes and daily rituals
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  ChallengeDayCard,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';

export default function Challenge30Day() {
  const [, navigate] = useLocation();

  const weeklyThemes = [
    {
      week: 1,
      theme: 'Foundation & Awareness',
      description: 'Begin with mindfulness and self-awareness practices',
      color: 'rgb(223, 196, 158)',
    },
    {
      week: 2,
      theme: 'Discipline & Ritual',
      description: 'Establish consistent daily spiritual practices',
      color: 'rgb(218, 188, 120)',
    },
    {
      week: 3,
      theme: 'Compassion & Ahimsa',
      description: 'Cultivate non-violence toward self and others',
      color: 'rgb(223, 196, 158)',
    },
    {
      week: 4,
      theme: 'Clarity & Transformation',
      description: 'Achieve inner peace and spiritual clarity',
      color: 'rgb(218, 188, 120)',
    },
  ];

  const dailyRituals = [
    'Day 1: Morning Navkar & Intention Setting',
    'Day 2: 10-Minute Mindfulness Meditation',
    'Day 3: Gratitude Journaling (3 things)',
    'Day 4: Ahimsa in Speech (Kind words only)',
    'Day 5: Digital Detox (1 hour before bed)',
    'Day 6: Mindful Eating Practice',
    'Day 7: Evening Forgiveness (Pratikraman)',
    'Day 8: Nature Walk & Connection',
    'Day 9: Act of Service (Seva)',
    'Day 10: Deep Breathing (Pranayama)',
  ];

  const allDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    week: Math.floor(i / 7) + 1,
    title: `Day ${i + 1} Ritual`,
    ritual: dailyRituals[i % dailyRituals.length],
    completed: i < 5,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-30day.png"
        title="The 30-Day Jain Healing Challenge"
        subtitle="A disciplined journey toward purity and inner clarity"
      />

      {/* ===== CHALLENGE OVERVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Your Spiritual Journey"
            subtitle="Four weeks of progressive transformation through Jain principles"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {weeklyThemes.map((week, index) => (
              <div
                key={index}
                className="card-spiritual"
                style={{ borderLeft: `4px solid ${week.color}` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-3"
                  style={{ backgroundColor: week.color }}
                >
                  {week.week}
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  Week {week.week}
                </h4>
                <h5 className="text-sm font-medium mb-2" style={{ color: week.color }}>
                  {week.theme}
                </h5>
                <p style={{ color: 'rgb(150, 150, 150)' }} className="text-sm">
                  {week.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DAILY RITUALS ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Daily Rituals"
            subtitle="Essential practices for each day of your journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dailyRituals.map((ritual, index) => (
              <div
                key={index}
                className="card-spiritual flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                >
                  ✓
                </div>
                <p style={{ color: 'rgb(95, 90, 85)' }} className="font-medium">
                  {ritual}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 30-DAY TIMELINE ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Your 30-Day Timeline"
            subtitle="Track your daily progress and spiritual growth"
          />
          <div className="space-y-8">
            {weeklyThemes.map((week) => (
              <div key={week.week}>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: week.color }}
                  >
                    {week.week}
                  </div>
                  <h3 style={{ color: 'rgb(95, 90, 85)' }} className="font-semibold">
                    Week {week.week}: {week.theme}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                  {allDays
                    .filter(d => d.week === week.week)
                    .map((day) => (
                      <ChallengeDayCard
                        key={day.day}
                        day={day.day}
                        title={day.title}
                        ritual={day.ritual}
                        completed={day.completed}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MUSIC SUGGESTIONS ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Recommended Music"
            subtitle="Enhance your practice with curated playlists"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🌅
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Morning Calm
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="text-sm mb-4">
                Start each day with peaceful devotion
              </p>
              <button className="button-spiritual text-sm w-full">
                Play
              </button>
            </div>
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🧘
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Meditation Flow
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="text-sm mb-4">
                Deep spiritual practice music
              </p>
              <button className="button-spiritual text-sm w-full">
                Play
              </button>
            </div>
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🌙
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Night Calm Down
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }} className="text-sm mb-4">
                Peaceful evening rituals
              </p>
              <button className="button-spiritual text-sm w-full">
                Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="What You'll Gain"
            subtitle="The transformative benefits of the 30-day journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                ✨
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  Inner Clarity
                </h4>
                <p style={{ color: 'rgb(150, 150, 150)' }}>
                  Develop a clearer understanding of your emotions and spiritual path
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🧘
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  Spiritual Discipline
                </h4>
                <p style={{ color: 'rgb(150, 150, 150)' }}>
                  Build consistent practices rooted in Jain principles
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                💆
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  Emotional Balance
                </h4>
                <p style={{ color: 'rgb(150, 150, 150)' }}>
                  Achieve greater emotional stability and resilience
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                🌟
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  Spiritual Growth
                </h4>
                <p style={{ color: 'rgb(150, 150, 150)' }}>
                  Experience profound personal transformation and awakening
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECOMMENDED MUSIC ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Recommended Music"
            subtitle="Enhance your practice with curated playlists"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'rgb(230, 230, 225)', backgroundColor: 'rgb(250, 250, 245)' }}>
              <div className="text-4xl mb-4">🌅</div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: 'rgb(95, 90, 85)' }}>Morning Calm</h4>
              <p className="text-sm mb-4" style={{ color: 'rgb(150, 150, 150)' }}>Start each day with peaceful devotion</p>
              <button
                onClick={() => window.open('http://localhost:8501', '_blank')}
                className="button-spiritual text-sm w-full flex items-center justify-center gap-2"
              >
                <Music size={16} /> Play
              </button>
            </div>

            <div className="p-6 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'rgb(230, 230, 225)', backgroundColor: 'rgb(250, 250, 245)' }}>
              <div className="text-4xl mb-4">🧘</div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: 'rgb(95, 90, 85)' }}>Meditation Flow</h4>
              <p className="text-sm mb-4" style={{ color: 'rgb(150, 150, 150)' }}>Deep spiritual practice music</p>
              <button
                onClick={() => window.open('http://localhost:8501', '_blank')}
                className="button-spiritual text-sm w-full flex items-center justify-center gap-2"
              >
                <Music size={16} /> Play
              </button>
            </div>

            <div className="p-6 rounded-2xl border transition-all hover:shadow-lg" style={{ borderColor: 'rgb(230, 230, 225)', backgroundColor: 'rgb(250, 250, 245)' }}>
              <div className="text-4xl mb-4">🌙</div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: 'rgb(95, 90, 85)' }}>Night Calm Down</h4>
              <p className="text-sm mb-4" style={{ color: 'rgb(150, 150, 150)' }}>Peaceful evening rituals</p>
              <button
                onClick={() => window.open('http://localhost:8501', '_blank')}
                className="button-spiritual text-sm w-full flex items-center justify-center gap-2"
              >
                <Music size={16} /> Play
              </button>
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
          <h2 className="text-white mb-4">Begin Your 30-Day Transformation</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Commit to 30 days of spiritual practice and witness the profound changes in your life.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 rounded-xl font-medium transition-all duration-500 bg-white"
            style={{ color: 'rgb(115, 55, 55)' }}
          >
            Start Challenge
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
