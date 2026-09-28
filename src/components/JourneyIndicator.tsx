import React, { useState, useEffect } from 'react';
import { useMood } from '../context/MoodContext';

const STAGES = [
  { id: 'arrive', num: '01', label: 'ARRIVE', href: '#arrive' },
  { id: 'stay', num: '02', label: 'STAY', href: '#stay' },
  { id: 'dine', num: '03', label: 'DINE', href: '#dining' },
  { id: 'relax', num: '04', label: 'RELAX', href: '#experience' },
];

export const JourneyIndicator: React.FC = () => {
  const { isDay } = useMood();
  const [activeStage, setActiveStage] = useState('arrive');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const arriveEl = document.getElementById('arrive');
      const stayEl = document.getElementById('stay');
      const diningEl = document.getElementById('dining');
      const experienceEl = document.getElementById('experience');

      if (experienceEl && scrollPos >= experienceEl.offsetTop) {
        setActiveStage('relax');
      } else if (diningEl && scrollPos >= diningEl.offsetTop) {
        setActiveStage('dine');
      } else if (stayEl && scrollPos >= stayEl.offsetTop) {
        setActiveStage('stay');
      } else if (arriveEl && scrollPos >= arriveEl.offsetTop) {
        setActiveStage('arrive');
      } else {
        setActiveStage('arrive');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`border-y transition-colors duration-300 ${
        isDay
          ? 'bg-[#F5F1E8] border-[#D9CCB8]/80 text-[#111214]'
          : 'bg-[#141518] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] shrink-0">
            <span>The Journey Concept</span>
            <span className="w-6 h-px bg-[#C7A45B]/60" />
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto lg:gap-10 sm:gap-6 gap-3">
            {STAGES.map((stage, idx) => {
              const isActive = activeStage === stage.id;
              return (
                <a
                  key={stage.id}
                  href={stage.href}
                  className={`flex items-center gap-2 transition-all duration-300 shrink-0 group ${
                    isActive
                      ? 'scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded transition-colors ${
                      isActive
                        ? 'bg-[#C7A45B] text-[#111214]'
                        : isDay
                        ? 'bg-[#D9CCB8]/50 text-[#5A4634]'
                        : 'bg-white/10 text-[#D9CCB8]'
                    }`}
                  >
                    {stage.num}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'text-[#C7A45B]'
                        : isDay
                        ? 'text-[#111214] group-hover:text-[#5A4634]'
                        : 'text-[#F5F1E8] group-hover:text-[#C7A45B]'
                    }`}
                  >
                    {stage.label}
                  </span>

                  {idx < STAGES.length - 1 && (
                    <span className="ml-2 sm:ml-4 text-xs opacity-30 select-none">
                      →
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-[#5A4634] dark:text-[#D9CCB8] shrink-0 font-medium">
            <span>Dewkali • 24h Stop</span>
          </div>
        </div>
      </div>
    </div>
  );
};
