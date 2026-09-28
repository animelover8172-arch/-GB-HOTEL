import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Menu, X, Sun, Moon, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const { mode, isDay, toggleMode, setSliderValue, sliderValue } = useMood();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Stay', href: '#stay' },
    { label: 'Dining', href: '#dining' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDay
            ? 'bg-[#F5F1E8]/90 text-[#111214] shadow-sm backdrop-blur-md border-b border-[#D9CCB8]/60 py-3'
            : 'bg-[#111214]/90 text-[#F5F1E8] shadow-md backdrop-blur-md border-b border-white/10 py-3'
          : isDay
          ? 'bg-transparent text-[#111214] py-5'
          : 'bg-transparent text-[#F5F1E8] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="flex items-baseline gap-2 group transition-opacity hover:opacity-90"
          >
            <span
              className="text-xl sm:text-2xl font-bold tracking-tight uppercase"
              style={{ fontFamily: 'Cinzel, Georgia, serif' }}
            >
              {HOTEL_INFO.name}
            </span>
            <span
              className={`text-xs font-medium tracking-wide transition-colors ${
                isDay ? 'text-[#5A4634]' : 'text-[#C7A45B]'
              }`}
            >
              {HOTEL_INFO.nameDevanagari}
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isDay
                    ? 'text-[#5A4634] hover:text-[#111214]'
                    : 'text-[#D9CCB8] hover:text-[#F5F1E8]'
                } group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C7A45B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Day/Night Toggle + Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Interactive Day/Night Mood Pill */}
            <div
              className={`flex items-center p-1 rounded-full border transition-all ${
                isDay
                  ? 'bg-white/80 border-[#D9CCB8] shadow-sm'
                  : 'bg-[#181a1d] border-white/15'
              }`}
              title="Toggle Day/Night Mood"
            >
              <button
                type="button"
                onClick={() => setSliderValue(0)}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  isDay
                    ? 'bg-[#C7A45B] text-white shadow-xs'
                    : 'text-[#D9CCB8] hover:text-white'
                }`}
                aria-label="Set Day Mood"
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Day</span>
              </button>
              <button
                type="button"
                onClick={() => setSliderValue(100)}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  !isDay
                    ? 'bg-[#C7A45B] text-white shadow-xs'
                    : 'text-[#5A4634] hover:text-[#111214]'
                }`}
                aria-label="Set Night Mood"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Night</span>
              </button>
            </div>

            {/* Enquire CTA */}
            <button
              type="button"
              onClick={onOpenEnquiry}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                isDay
                  ? 'bg-[#111214] text-[#F5F1E8] hover:bg-[#5A4634]'
                  : 'bg-[#C7A45B] text-[#111214] hover:bg-[#b59247]'
              }`}
            >
              Enquire
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleMode}
              className={`p-2 rounded-full border ${
                isDay
                  ? 'bg-white border-[#D9CCB8] text-[#111214]'
                  : 'bg-[#1a1b1f] border-white/20 text-[#C7A45B]'
              }`}
              aria-label="Toggle mood"
            >
              {isDay ? <Sun className="w-4 h-4 text-amber-600" /> : <Moon className="w-4 h-4 text-[#C7A45B]" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDay ? 'text-[#111214] hover:bg-black/5' : 'text-[#F5F1E8] hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-[57px] bottom-0 z-40 p-6 flex flex-col justify-between overflow-y-auto ${
            isDay ? 'bg-[#F5F1E8] text-[#111214]' : 'bg-[#111214] text-[#F5F1E8]'
          }`}
        >
          <div className="space-y-6 pt-4">
            <div className="pb-4 border-b border-neutral-300 dark:border-neutral-800">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] block mb-1">
                Dewkali, Sadatpur, Bihar
              </span>
              <p className="text-xl font-bold font-serif">{HOTEL_INFO.name} • {HOTEL_INFO.nameDevanagari}</p>
              <p className="text-xs opacity-75 mt-1">{HOTEL_INFO.subheadline}</p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg font-medium transition-colors ${
                    isDay ? 'text-[#111214] hover:text-[#C7A45B]' : 'text-[#F5F1E8] hover:text-[#C7A45B]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-neutral-300 dark:border-neutral-800">
            {/* Mood selector in mobile menu */}
            <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 p-3 rounded-lg">
              <span className="text-xs font-semibold uppercase tracking-wider">Atmosphere Mood</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setSliderValue(0)}
                  className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${
                    isDay ? 'bg-[#C7A45B] text-white font-semibold' : 'text-neutral-400'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" /> Day
                </button>
                <button
                  type="button"
                  onClick={() => setSliderValue(100)}
                  className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${
                    !isDay ? 'bg-[#C7A45B] text-white font-semibold' : 'text-neutral-400'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" /> Night
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-[#C7A45B] text-xs font-semibold uppercase tracking-wider text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A45B]" />
                Call Hotel
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="py-3 px-4 rounded-md bg-[#C7A45B] text-[#111214] text-xs font-bold uppercase tracking-wider text-center"
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
