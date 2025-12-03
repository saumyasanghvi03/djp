/**
 * NotFound Page - Jain Vibes
 * Design: Devotional Minimalism with Sacred Geometry
 * 404 error page
 */

import { useLocation } from 'wouter';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: 'rgb(250, 250, 245)' }}
    >
      <div className="text-center">
        <h1
          className="text-7xl md:text-9xl font-bold mb-4"
          style={{ color: 'rgb(223, 196, 158)' }}
        >
          404
        </h1>
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: 'rgb(95, 90, 85)' }}
        >
          Page Not Found
        </h2>
        <p
          className="text-lg mb-8 max-w-md"
          style={{ color: 'rgb(150, 150, 150)' }}
        >
          The page you're looking for seems to have wandered off the spiritual path. Let's get you back on track.
        </p>
        <button
          onClick={() => navigate('/')}
          className="button-spiritual"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
