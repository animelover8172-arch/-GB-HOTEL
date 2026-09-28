import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Clock, Sun, Moon, Sunrise, Sunset, Shield, Sparkles } from 'lucide-react';

const TIMELINE_POINTS = [
  { time: '12 AM', label: 'Midnight Haven', icon: Moon, desc: 'Quiet rooms & overnight check-in for highway drivers.' },
  { time: '6 AM', label: 'Dawn Refresh', icon: Sunrise, desc: 'Hot morning tea, warm water, and fresh day start.' },
  { time: '12 PM', label: 'Midday Dining', icon: Sun, desc: 'Fresh hot Veg Thali, cool drinks, and travel break.' },
  { time: '6 PM', label: 'Twilight Arrival', icon: Sunset, desc: 'Golden evening dinner, relaxing ambience, and night stays.' },
];

export const OpenAllDaySection: React.FC = () => {
  const { isDay, setSliderValue } = useMood();
  const [activePoint, setActivePoint] = useState(0);

  // Auto-cycle through the 24 hours timeline slowly if user doesn't click
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % TIMELINE_POINTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="open-24h"
      className={`py-24 border-t relative overflow-hidden transition-colors duration-700 ${
        isDay
          ? 'bg-gradient-to-b from-[#F5F1E8] via-[#EDE5D5] to-[#F5F1E8] text-[#111214]'
          : 'bg-gradient-to-b from-[#111214] via-[#0d0e10] to-[#111214] text-[#F5F1E8]'
      }`}
    >
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C7A45B]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Customer Verified 24-Hour Hospitality</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            OPEN. WHEN YOU NEED US.
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 max-w-md mx-auto ${
              isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
            }`}
          >
            A welcoming stop for travellers, day or night.
          </p>
        </div>

        {/* 24 Hours Signature Circular Visual */}
        <div className="relative max-w-xl mx-auto mb-16">
          {/* Outer ring */}
          <div className="relative aspect-square max-w-[380px] sm:max-w-[440px] mx-auto rounded-full border border-[#C7A45B]/30 flex items-center justify-center p-6 shadow-2xl">
            {/* Spinning decorative orbit */}
            <div className="absolute inset-2 rounded-full border border-dashed border-[#C7A45B]/20 animate-[spin_60s_linear_infinite]" />

            {/* Middle decorative track */}
            <div className="absolute inset-8 rounded-full border border-neutral-700/20 dark:border-neutral-700/40" />

            {/* Center Core */}
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#C7A45B]/40 flex flex-col items-center justify-center text-center p-6 backdrop-blur-md shadow-2xl transition-all duration-300 ${
                isDay
                  ? 'bg-white/80 text-[#111214]'
                  : 'bg-[#181a1d]/90 text-[#F5F1E8]'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] font-semibold">
                Dewkali, Bihar
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold tracking-tight mt-1"
                style={{ fontFamily: 'Cinzel, Georgia, serif' }}
              >
                {HOTEL_INFO.name}
              </h3>
              <span className="text-xs text-[#C7A45B] font-medium">
                {HOTEL_INFO.nameDevanagari}
              </span>
              <div className="w-8 h-px bg-[#C7A45B]/40 my-2" />
              <p className="text-[11px] leading-tight opacity-75">
                A place to pause, whenever the journey brings you here.
              </p>
            </div>

            {/* 4 Interactive Quadrant Points: 12 AM (Top), 6 AM (Right), 12 PM (Bottom), 6 PM (Left) */}
            {/* 12 AM (Top) */}
            <button
              type="button"
              onClick={() => {
                setActivePoint(0);
                setSliderValue(100);
              }}
              className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-transform ${
                activePoint === 0 ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-lg transition-colors ${
                  activePoint === 0
                    ? 'bg-[#C7A45B] text-[#111214] border-[#C7A45B]'
                    : isDay
                    ? 'bg-white text-[#111214] border-[#D9CCB8]'
                    : 'bg-[#181a1d] text-[#F5F1E8] border-white/20'
                }`}
              >
                <Moon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider mt-1">12 AM</span>
            </button>

            {/* 6 AM (Right) */}
            <button
              type="button"
              onClick={() => {
                setActivePoint(1);
                setSliderValue(20);
              }}
              className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 flex flex-col items-center group cursor-pointer transition-transform ${
                activePoint === 1 ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-lg transition-colors ${
                  activePoint === 1
                    ? 'bg-[#C7A45B] text-[#111214] border-[#C7A45B]'
                    : isDay
                    ? 'bg-white text-[#111214] border-[#D9CCB8]'
                    : 'bg-[#181a1d] text-[#F5F1E8] border-white/20'
                }`}
              >
                <Sunrise className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider mt-1">6 AM</span>
            </button>

            {/* 12 PM (Bottom) */}
            <button
              type="button"
              onClick={() => {
                setActivePoint(2);
                setSliderValue(0);
              }}
              className={`absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-transform ${
                activePoint === 2 ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-lg transition-colors ${
                  activePoint === 2
                    ? 'bg-[#C7A45B] text-[#111214] border-[#C7A45B]'
                    : isDay
                    ? 'bg-white text-[#111214] border-[#D9CCB8]'
                    : 'bg-[#181a1d] text-[#F5F1E8] border-white/20'
                }`}
              >
                <Sun className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider mt-1">12 PM</span>
            </button>

            {/* 6 PM (Left) */}
            <button
              type="button"
              onClick={() => {
                setActivePoint(3);
                setSliderValue(70);
              }}
              className={`absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-transform ${
                activePoint === 3 ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-lg transition-colors ${
                  activePoint === 3
                    ? 'bg-[#C7A45B] text-[#111214] border-[#C7A45B]'
                    : isDay
                    ? 'bg-white text-[#111214] border-[#D9CCB8]'
                    : 'bg-[#181a1d] text-[#F5F1E8] border-white/20'
                }`}
              >
                <Sunset className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider mt-1">6 PM</span>
            </button>
          </div>
        </div>

        {/* Selected Hour Details Box */}
        <div className="max-w-md mx-auto text-center">
          <div
            className={`p-5 rounded-2xl border shadow-lg transition-all duration-300 ${
              isDay ? 'bg-white/80 border-[#D9CCB8]' : 'bg-[#181a1d]/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#C7A45B] uppercase mb-1">
              <span>{TIMELINE_POINTS[activePoint].time}</span>
              <span>•</span>
              <span>{TIMELINE_POINTS[activePoint].label}</span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              {TIMELINE_POINTS[activePoint].desc}
            </p>
          </div>
        </div>

        {/* Responsible Verification Note */}
        <p className="text-center text-[11px] opacity-60 mt-8 max-w-lg mx-auto">
          *Round-the-clock roadside reception and night accommodation available 24 hours. Dining prepared fresh during kitchen operating hours.
        </p>
      </div>
    </section>
  );
};
