/**
 * Jain Vibes Component Library
 * Design System: Devotional Minimalism with Sacred Geometry
 * Color Palette: Sandalwood, Soft White, Warm Maroon, Deep Stone
 */

import React from 'react';
import { ChevronRight, Heart, Music, Calendar, AlertCircle, Mail } from 'lucide-react';

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    onClick: () => void;
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="text-white drop-shadow-lg mb-4 md:mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl drop-shadow-md mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCTA && (
            <button
              onClick={primaryCTA.onClick}
              className="button-spiritual"
            >
              {primaryCTA.text}
            </button>
          )}
          {secondaryCTA && (
            <button
              onClick={secondaryCTA.onClick}
              className="button-secondary"
            >
              {secondaryCTA.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="card-spiritual cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{ backgroundColor: 'rgb(223, 196, 158)' }}
        >
          <div className="text-white">{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
            {title}
          </h3>
          <p className="text-sm" style={{ color: 'rgb(150, 150, 150)' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COACH MODE CARD COMPONENT
// ============================================================================

interface CoachModeCardProps {
  name: string;
  description: string;
  emoji?: string;
  onClick?: () => void;
}

export const CoachModeCard: React.FC<CoachModeCardProps> = ({
  name,
  description,
  emoji = '🧘',
  onClick,
}) => {
  return (
    <div
      className="card-spiritual cursor-pointer text-center group"
      onClick={onClick}
    >
      <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-125">
        {emoji}
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
        {name}
      </h3>
      <p className="text-sm mb-4" style={{ color: 'rgb(150, 150, 150)' }}>
        {description}
      </p>
      <button className="button-spiritual text-sm w-full">
        Choose Mode
      </button>
    </div>
  );
};

// ============================================================================
// PLAYLIST CARD COMPONENT
// ============================================================================

interface PlaylistCardProps {
  title: string;
  description: string;
  trackCount: number;
  duration: string;
  onClick?: () => void;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  title,
  description,
  trackCount,
  duration,
  onClick,
}) => {
  return (
    <div
      className="card-spiritual cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: 'rgb(95, 90, 85)' }}>
            {title}
          </h3>
          <p className="text-sm mt-1" style={{ color: 'rgb(150, 150, 150)' }}>
            {description}
          </p>
        </div>
        <Music
          size={24}
          style={{ color: 'rgb(223, 196, 158)' }}
          className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex justify-between text-xs pt-4 border-t" style={{ borderColor: 'rgb(230, 230, 225)' }}>
        <span style={{ color: 'rgb(150, 150, 150)' }}>{trackCount} tracks</span>
        <span style={{ color: 'rgb(150, 150, 150)' }}>{duration}</span>
      </div>
    </div>
  );
};

// ============================================================================
// CHALLENGE DAY CARD COMPONENT
// ============================================================================

interface ChallengeDayCardProps {
  day: number;
  title: string;
  ritual: string;
  completed?: boolean;
}

export const ChallengeDayCard: React.FC<ChallengeDayCardProps> = ({
  day,
  title,
  ritual,
  completed = false,
}) => {
  return (
    <div
      className="card-spiritual relative overflow-hidden"
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
          <h4 className="font-semibold" style={{ color: 'rgb(95, 90, 85)' }}>
            {title}
          </h4>
          <p className="text-sm mt-1" style={{ color: 'rgb(150, 150, 150)' }}>
            {ritual}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SOS CALMING FLOW STEP COMPONENT
// ============================================================================

interface SOSStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const SOSStep: React.FC<SOSStepProps> = ({
  step,
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex gap-6 mb-8 last:mb-0">
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4"
          style={{ backgroundColor: 'rgb(223, 196, 158)' }}
        >
          {step}
        </div>
        {step < 5 && (
          <div
            className="w-1 h-16"
            style={{ backgroundColor: 'rgb(230, 230, 225)' }}
          />
        )}
      </div>
      <div className="pt-2">
        <h4 className="font-semibold text-lg mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
          {title}
        </h4>
        <p style={{ color: 'rgb(150, 150, 150)' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-12'}>
      <h2 style={{ color: 'rgb(95, 90, 85)' }} className="mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl" style={{ color: 'rgb(150, 150, 150)' }}>
          {subtitle}
        </p>
      )}
      <div className="divider-spiritual mt-6" />
    </div>
  );
};

// ============================================================================
// PHILOSOPHY BLOCK COMPONENT
// ============================================================================

interface PhilosophyBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const PhilosophyBlock: React.FC<PhilosophyBlockProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgb(250, 250, 245)', border: '2px solid rgb(223, 196, 158)' }}
        >
          <div style={{ color: 'rgb(223, 196, 158)' }}>{icon}</div>
        </div>
      </div>
      <h4 className="font-semibold text-lg mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
        {title}
      </h4>
      <p style={{ color: 'rgb(150, 150, 150)' }}>
        {description}
      </p>
    </div>
  );
};

// ============================================================================
// CONTACT FORM COMPONENT
// ============================================================================

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border"
          style={{
            borderColor: 'rgb(230, 230, 225)',
            backgroundColor: 'rgb(250, 250, 245)',
          }}
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border"
          style={{
            borderColor: 'rgb(230, 230, 225)',
            backgroundColor: 'rgb(250, 250, 245)',
          }}
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border"
          style={{
            borderColor: 'rgb(230, 230, 225)',
            backgroundColor: 'rgb(250, 250, 245)',
          }}
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="button-spiritual w-full"
      >
        {submitted ? '✓ Message Sent' : 'Send Message'}
      </button>
    </form>
  );
};

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  links: NavLink[];
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  links,
  currentPath,
  onNavigate,
}) => {
  return (
    <nav
      className="sticky top-0 z-50 w-full shadow-sm"
      style={{ backgroundColor: 'rgb(250, 250, 245)' }}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="text-2xl font-bold" style={{ color: 'rgb(223, 196, 158)' }}>
          Jain Vibes
        </div>
        <div className="flex gap-8">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => onNavigate(link.href)}
              className="text-sm font-medium transition-colors duration-300"
              style={{
                color: currentPath === link.href ? 'rgb(223, 196, 158)' : 'rgb(95, 90, 85)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-12 md:py-16"
      style={{ backgroundColor: 'rgb(95, 90, 85)', color: 'rgb(250, 250, 245)' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Jain Vibes</h4>
            <p className="text-sm opacity-75">
              Jain Emotional Wellness for Today's Generation
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><button className="hover:opacity-100">AI Coach</button></li>
              <li><button className="hover:opacity-100">Music Engine</button></li>
              <li><button className="hover:opacity-100">30-Day Challenge</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><button className="hover:opacity-100">About</button></li>
              <li><button className="hover:opacity-100">Contact</button></li>
              <li><button className="hover:opacity-100">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><button className="hover:opacity-100">Twitter</button></li>
              <li><button className="hover:opacity-100">Instagram</button></li>
              <li><button className="hover:opacity-100">Email</button></li>
            </ul>
          </div>
        </div>
        <div
          className="pt-8 border-t text-center text-sm opacity-75"
          style={{ borderColor: 'rgba(250, 250, 245, 0.1)' }}
        >
          <p>A project by Saumya Sanghvi © 2025-2027 Jain Vibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
