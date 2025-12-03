/**
 * 30-Day Challenge Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Structured spiritual journey with weekly themes and daily rituals
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import { Check, Music } from 'lucide-react';

interface ChallengeDayCardProps {
  day: number;
  title: string;
  tasks: string[];
  completed?: boolean;
}

const ChallengeDayCard: React.FC<ChallengeDayCardProps> = ({
  day,
  title,
  tasks,
  completed = false,
}) => {
  return (
    <div
      className="card-spiritual relative overflow-hidden h-full"
      style={{
        borderLeft: `4px solid ${completed ? 'rgb(223, 196, 158)' : 'rgb(230, 230, 225)'}`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
          style={{ backgroundColor: completed ? 'rgb(223, 196, 158)' : 'rgb(200, 200, 200)' }}
        >
          {day}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
            {title}
          </h4>
          <ul className="space-y-1">
            {tasks.map((task, i) => (
              <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'rgb(150, 150, 150)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        {completed && <Check size={16} className="text-green-500" />}
      </div>
    </div>
  );
};

export default function Challenge30Day() {
  const [, navigate] = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

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

  const challengeData = [
    { day: 1, title: "Navkar Reset", tasks: ["27 Navkars", "Navkar Mantra (Calm)", "Journal: What do I want to heal?"] },
    { day: 2, title: "Purity Shift", tasks: ["Avoid potato/onion/garlic for 1 meal", "Neminath playlist", "Act of kindness"] },
    { day: 3, title: "Strength Build", tasks: ["SOS breathing", "Nemras Soft", "Write 3 things to detach from"] },
    // Placeholder for remaining days to maintain layout
    ...Array.from({ length: 27 }, (_, i) => ({
      day: i + 4,
      title: `Day ${i + 4} Ritual`,
      tasks: ["Morning Meditation", "Read Jain Wisdom", "Evening Reflection"]
    }))
  ];

  const allDays = challengeData.map(d => ({
    ...d,
    week: Math.floor((d.day - 1) / 7) + 1,
    completed: d.day < 2 // Mark first day as completed for demo
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
            {/* Displaying first few days as examples in this section if needed, or removing if redundant with timeline */}
            {/* For now, keeping a subset or removing this section if timeline covers it. 
                 The original design had a separate "Daily Rituals" list. 
                 Let's keep it but use the new data structure. */}
            {challengeData.slice(0, 4).map((day, index) => (
              <div
                key={index}
                className="card-spiritual flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'rgb(223, 196, 158)' }}
                >
                  ✓
                </div>
                <div>
                  <p style={{ color: 'rgb(95, 90, 85)' }} className="font-medium">
                    {day.title}
                  </p>
                  <p className="text-sm text-gray-500">{day.tasks.join(", ")}</p>
                </div>
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
                        tasks={day.tasks}
                        completed={day.completed}
                      />
                    ))}
                </div>
              </div>
            ))}
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
                onClick={() => handleNavigate('/app')}
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
                onClick={() => handleNavigate('/app')}
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
                onClick={() => handleNavigate('/app')}
                className="button-spiritual text-sm w-full flex items-center justify-center gap-2"
              >
                <Music size={16} /> Play
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
            onClick={() => handleNavigate('/app')}
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
