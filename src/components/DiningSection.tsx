import React, { useState } from 'react';
import { HOTEL_IMAGES, DINING_CATEGORIES } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Utensils, Sparkles, Check, ChevronRight } from 'lucide-react';

interface DiningSectionProps {
  onOpenEnquiry: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenEnquiry }) => {
  const { isDay } = useMood();
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section
      id="dining"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 ${
        isDay
          ? 'bg-[#ECE5D8]/50 border-[#D9CCB8] text-[#111214]'
          : 'bg-[#141518] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B]">
              <Utensils className="w-3.5 h-3.5" />
              <span>03 / Restaurant & Dining</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-balance"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              GOOD FOOD, ANY TIME
            </h2>
          </div>

          <div className="max-w-md">
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              Fresh, pure, and steaming hot Indian meals prepared to replenish long-distance travelers. Praised by guests for wholesome vegetarian thalis and attentive staff service.
            </p>
          </div>
        </div>

        {/* Featured Veg Thali Showcase Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C7A45B]/40 mb-16 bg-[#111214]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Food Image */}
            <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-[480px] relative overflow-hidden">
              <img
                src={HOTEL_IMAGES.vegThali}
                alt="Authentic Indian Vegetarian Thali at GB Hotel Dewkali Bihar"
                className="w-full h-full object-cover zoom-image"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C7A45B] text-[#111214] shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Guest Signature Favourite
                </span>
              </div>
            </div>

            {/* Thali Story & Details */}
            <div className="lg:col-span-5 p-8 sm:p-10 text-white space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                  Customer Verified Highlight
                </span>
                <h3
                  className="text-3xl sm:text-4xl font-normal tracking-tight"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  VEG THALI
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Specifically celebrated in guest reviews. Our signature vegetarian thali offers a balanced, homestyle feast featuring aromatic dal, paneer curry, seasonal sabzi, steaming basmati rice, freshly puffed rotis, and crisp accompaniments.
                </p>
              </div>

              {/* Review Testimonial Citation */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs italic text-neutral-200">
                &ldquo;Good service Veg thali Night rest bed ac room Open 24 hours&rdquo;
                <div className="not-italic text-[11px] font-semibold text-[#C7A45B] mt-1">
                  — Suraj Mali, Google Review
                </div>
              </div>

              {/* Food Features */}
              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C7A45B]" />
                  <span>100% Pure Vegetarian</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C7A45B]" />
                  <span>Made Fresh to Order</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C7A45B]" />
                  <span>Hot Homestyle Rotis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C7A45B]" />
                  <span>Highway Traveller Portions</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-lg transition-all duration-200"
                >
                  <span>Explore Menu</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Tabbed Presentation */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-neutral-300 dark:border-neutral-800">
            <h3 className="text-xl font-bold font-serif tracking-wide">
              Dining Offerings & Experience
            </h3>
            <span className="text-xs opacity-60">Prepared fresh daily</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DINING_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.name}
                onClick={() => setSelectedCategory(idx)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedCategory === idx
                    ? 'border-[#C7A45B] ring-1 ring-[#C7A45B] shadow-lg ' +
                      (isDay ? 'bg-white' : 'bg-[#181a1d]')
                    : isDay
                    ? 'bg-white/60 border-[#D9CCB8] hover:border-[#5A4634]'
                    : 'bg-[#181a1d]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#C7A45B]">0{idx + 1}</span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase opacity-60">
                      {cat.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{cat.name}</h4>
                  <p className="text-xs text-[#C7A45B] font-medium mb-3">{cat.highlight}</p>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDay ? 'text-[#5A4634]' : 'text-neutral-300'
                    }`}
                  >
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 space-y-1.5 text-[11px]">
                  {cat.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 opacity-80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A45B]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Restaurant Atmosphere Preview Box */}
          <div className="relative rounded-xl overflow-hidden mt-10 border border-neutral-700/20 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={HOTEL_IMAGES.restaurantAmbience}
              alt="Family dining hall and welcoming tables at GB Hotel Dewkali"
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white max-w-xl">
                <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold block mb-1">
                  Family Dining Hall
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-serif">
                  Spacious, Calm & Welcoming Environment
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Clean wooden tables, comfortable chairs, and attentive table staff ready to serve single travellers and complete families alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
