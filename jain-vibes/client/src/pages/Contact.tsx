/**
 * Contact Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * Contact form for support, feedback, and collaboration
 */

import { useLocation } from 'wouter';
import {
  HeroSection,
  ContactForm,
  SectionHeader,
  Footer,
} from '@/components/JainVibesComponents';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [, navigate] = useLocation();

  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Form submitted:', data);
    // In a real application, this would send data to a backend
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage="/images/hero-features.png"
        title="Contact Jain Vibes"
        subtitle="We'd love to hear from you"
      />

      {/* ===== CONTACT INFO ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions, feedback, or want to collaborate? We're here to help."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Email
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                hello@jainvibes.com
              </p>
            </div>
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Phone
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                +1 (555) 123-4567
              </p>
            </div>
            <div className="card-spiritual text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgb(223, 196, 158)' }}
              >
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                Location
              </h4>
              <p style={{ color: 'rgb(150, 150, 150)' }}>
                Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Send Us a Message"
            subtitle="We typically respond within 24 hours"
          />
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions"
          />
          <div className="space-y-6">
            {[
              {
                question: 'Is Jain Vibes free to use?',
                answer: 'Jain Vibes offers both free and premium features. Basic access to the AI coach, music engine, and SOS support is free. Premium features include advanced coaching modes and exclusive content.',
              },
              {
                question: 'How does the AI coach work?',
                answer: 'Our AI coach is trained on Jain principles and modern emotional wellness practices. It learns from your interactions to provide increasingly personalized guidance over time.',
              },
              {
                question: 'Can I use Jain Vibes if I\'m not Jain?',
                answer: 'Absolutely! Jain Vibes is designed for anyone interested in Jain spiritual wisdom and emotional wellness. The practices and principles are universal and benefit people of all backgrounds.',
              },
              {
                question: 'Is my data private and secure?',
                answer: 'Yes. We take privacy seriously and use industry-standard encryption. Your personal information and conversations are never shared with third parties.',
              },
              {
                question: 'What if I\'m in crisis?',
                answer: 'If you\'re experiencing a mental health crisis, please reach out to professional help immediately. Visit our SOS page for crisis resources and hotline numbers.',
              },
              {
                question: 'Can I download the app?',
                answer: 'Jain Vibes is currently available as a web application. Mobile apps for iOS and Android are coming soon.',
              },
            ].map((item, i) => (
              <div key={i} className="card-spiritual">
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(95, 90, 85)' }}>
                  {item.question}
                </h4>
                <p style={{ color: 'rgb(150, 150, 150)' }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPORT RESOURCES ===== */}
      <section className="section-spacing" style={{ backgroundColor: 'rgb(250, 250, 245)' }}>
        <div className="container">
          <SectionHeader
            title="Support Resources"
            subtitle="Additional help and information"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                Documentation
              </h4>
              <ul className="space-y-2">
                {[
                  'Getting Started Guide',
                  'Feature Tutorials',
                  'Best Practices',
                  'Troubleshooting',
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      className="text-sm transition-colors duration-300"
                      style={{ color: 'rgb(223, 196, 158)' }}
                    >
                      {item} →
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-spiritual">
              <h4 className="font-semibold mb-3" style={{ color: 'rgb(95, 90, 85)' }}>
                Community
              </h4>
              <ul className="space-y-2">
                {[
                  'Community Forum',
                  'Events & Workshops',
                  'Testimonials',
                  'Blog',
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      className="text-sm transition-colors duration-300"
                      style={{ color: 'rgb(223, 196, 158)' }}
                    >
                      {item} →
                    </button>
                  </li>
                ))}
              </ul>
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
          <h2 className="text-white mb-4">Thank You for Reaching Out</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your feedback helps us create a better experience for everyone. We look forward to connecting with you.
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
    </div>
  );
}
