import React from 'react';
import { useMood } from '../context/MoodContext';
import { Sun, Moon, Compass, Sparkles } from 'lucide-react';
import { HOTEL_IMAGES } from '../data/hotelData';

export const MoodExperience: React.FC = () => {
  const { sliderValue, setSliderValue, isDay } = useMood();

  return (
    <section
      id="moods"
      className={`py-16 sm:py-20 border-t transition-colors duration-500 relative overflow-hidden ${
        isDay
          ? 'bg-[#ECE5D8]/70 border-[#D9CCB8] text-[#111214]'
          : 'bg-[#0e0f11] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Atmosphere</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-normal tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            GB HOTEL — TWO MOODS
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
            }`}
          >
            Hospitality is never static. Slide between daybreak refreshment and nighttime haven to experience both souls of GB Hotel.
          </p>
        </div>

        {/* The Atmospheric Slider Control: DAY ☀ ━━━━━ ☾ NIGHT */}
        <div className="max-w-md mx-auto mb-12">
          <div
            className={`p-4 sm:p-5 rounded-2xl border shadow-xl transition-all duration-300 ${
              isDay
                ? 'bg-white/80 border-[#D9CCB8]'
                : 'bg-[#181a1d] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-3">
              <button
                type="button"
                onClick={() => setSliderValue(0)}
                className={`flex items-center gap-1.5 transition-colors ${
                  isDay ? 'text-[#C7A45B] font-bold' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>DAY ☀</span>
              </button>
              <span className="text-[11px] opacity-40 font-mono">
                {sliderValue < 30 ? 'Morning / Day' : sliderValue > 70 ? 'Evening / Night' : 'Golden Twilight'}
              </span>
              <button
                type="button"
                onClick={() => setSliderValue(100)}
                className={`flex items-center gap-1.5 transition-colors ${
                  !isDay ? 'text-[#C7A45B] font-bold' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span>☾ NIGHT</span>
                <Moon className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Range Slider */}
            <div className="relative py-2">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-300 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C7A45B] focus:outline-none"
                aria-label="GB Hotel Two Moods atmosphere slider"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1 px-1">
                <span>06:00 AM</span>
                <span>12:00 PM</span>
                <span>06:00 PM</span>
                <span>12:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Mood Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Day Card */}
          <div
            onClick={() => setSliderValue(0)}
            className={`cursor-pointer rounded-2xl p-6 sm:p-8 border transition-all duration-500 relative flex flex-col justify-between overflow-hidden ${
              isDay
                ? 'bg-[#F5F1E8] border-[#C7A45B] shadow-2xl scale-[1.01] ring-1 ring-[#C7A45B]/50'
                : 'bg-[#181a1d]/40 border-white/10 opacity-70 hover:opacity-90'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-600 text-3xl font-light">☀</span>
                <span
                  className={`text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full ${
                    isDay ? 'bg-[#C7A45B]/20 text-[#5A4634]' : 'bg-white/10 text-neutral-300'
                  }`}
                >
                  Day Mode
                </span>
              </div>
              <h3
                className="text-2xl font-bold tracking-tight mb-2 text-[#111214] dark:text-neutral-100"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Fresh. Bright. Welcoming.
              </h3>
              <p className="text-sm text-[#5A4634] dark:text-neutral-300 leading-relaxed mb-6">
                Warm morning sunlight spilling into the dining hall, fresh vegetarian meals steaming hot from the kitchen, and energetic hospitality for travelers setting off.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-black/10 dark:border-white/10 text-xs text-[#5A4634] dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>Warm morning sunlight & airy reception</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>Steaming morning tea & daytime vegetarian thali</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>Quick highway refresh & travel assistance</span>
              </div>
            </div>
          </div>

          {/* Night Card */}
          <div
            onClick={() => setSliderValue(100)}
            className={`cursor-pointer rounded-2xl p-6 sm:p-8 border transition-all duration-500 relative flex flex-col justify-between overflow-hidden ${
              !isDay
                ? 'bg-[#15171a] border-[#C7A45B] shadow-2xl scale-[1.01] ring-1 ring-[#C7A45B]/50'
                : 'bg-white/40 border-[#D9CCB8] opacity-70 hover:opacity-90'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C7A45B] text-3xl font-light">☾</span>
                <span
                  className={`text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full ${
                    !isDay ? 'bg-[#C7A45B]/20 text-[#C7A45B]' : 'bg-black/10 text-neutral-600'
                  }`}
                >
                  Night Mode
                </span>
              </div>
              <h3
                className="text-2xl font-bold tracking-tight mb-2 text-[#111214] dark:text-[#F5F1E8]"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Calm. Warm. Restful.
              </h3>
              <p className="text-sm text-[#5A4634] dark:text-[#D9CCB8] leading-relaxed mb-6">
                Deep charcoal calm, warm bedside lamp glow, quiet air-conditioned bedrooms, and reassuring 24-hour night stay hospitality after grueling hours of highway driving.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-black/10 dark:border-white/10 text-xs text-[#5A4634] dark:text-[#D9CCB8]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>Deep charcoal quiet & relaxing AC room</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>Comfortable bedding for unbroken night sleep</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45B]" />
                <span>24-Hour roadside safe haven in Dewkali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
