import React, { useState } from 'react';
import { EXPERIENCE_STEPS } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Compass, ArrowRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { isDay } = useMood();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="experience"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 ${
        isDay
          ? 'bg-[#F5F1E8] border-[#D9CCB8] text-[#111214]'
          : 'bg-[#111214] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B]">
              <Compass className="w-3.5 h-3.5" />
              <span>04 / The Five-Stage Journey</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-balance"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              THE ROAD CHRONICLES
            </h2>
          </div>

          <div className="max-w-md">
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              Every journey requires a dependable comma in the sentence of the road.
              Here is how each stop at GB Hotel unfolds.
            </p>
          </div>
        </div>

        {/* Vertical Editorial Blocks with Image Transition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Large Editorial Blocks */}
          <div className="lg:col-span-6 space-y-4">
            {EXPERIENCE_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? isDay
                        ? 'bg-white border-[#C7A45B] shadow-xl ring-1 ring-[#C7A45B]'
                        : 'bg-[#181a1d] border-[#C7A45B] shadow-2xl ring-1 ring-[#C7A45B]'
                      : isDay
                      ? 'bg-white/40 border-[#D9CCB8]/60 hover:bg-white/70'
                      : 'bg-[#15171a]/50 border-white/5 hover:bg-[#181a1d]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight transition-colors ${
                            isSelected ? 'text-[#C7A45B]' : 'opacity-40'
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3
                          className="text-xl sm:text-2xl font-bold tracking-tight"
                          style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-[#C7A45B]">
                        {step.tagline}
                      </p>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                          isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
                        } ${isSelected ? 'block' : 'hidden sm:block opacity-75'}`}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#C7A45B] text-[#111214] border-[#C7A45B]'
                          : 'border-neutral-500/20 opacity-30 group-hover:opacity-100'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Large Image Spotlight */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/30 relative aspect-[4/3] bg-[#111214]">
              <img
                src={EXPERIENCE_STEPS[activeStep].image}
                alt={`${EXPERIENCE_STEPS[activeStep].title} at GB Hotel Dewkali`}
                className="w-full h-full object-cover zoom-image"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-mono font-bold text-[#C7A45B] uppercase tracking-widest">
                  Stage {EXPERIENCE_STEPS[activeStep].number} of 05
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                >
                  {EXPERIENCE_STEPS[activeStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {EXPERIENCE_STEPS[activeStep].tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
