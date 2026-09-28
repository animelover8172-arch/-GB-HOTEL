import React from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Star, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const { isDay } = useMood();

  return (
    <section
      id="hero"
      className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden transition-colors duration-500 ${
        isDay
          ? 'bg-gradient-to-b from-[#F5F1E8] via-[#ECE5D8] to-[#F5F1E8] text-[#111214]'
          : 'bg-gradient-to-b from-[#111214] via-[#16181b] to-[#111214] text-[#F5F1E8]'
      }`}
    >
      {/* Subtle decorative atmospheric background glow */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: isDay
            ? 'radial-gradient(circle, #C7A45B 0%, rgba(245,241,232,0) 70%)'
            : 'radial-gradient(circle, #C7A45B 0%, rgba(17,18,20,0) 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Story */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#C7A45B] animate-pulse" />
              <span className={isDay ? 'text-[#5A4634]' : 'text-[#C7A45B]'}>
                GB HOTEL • DEWKALI
              </span>
            </div>

            {/* Large headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-balance"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Rest Well. <br />
              <span className="italic font-light text-[#C7A45B]">Dine Well.</span> <br />
              Continue Your Journey.
            </h1>

            {/* Supporting text */}
            <p
              className={`text-base sm:text-lg max-w-xl leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              A comfortable stay and welcoming dining experience in Dewkali, Sadatpur.
              Designed specifically for travellers seeking quality rest, pure food, and peaceful overnight hospitality.
            </p>

            {/* Roadside Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium pt-2">
              <div className="flex items-center gap-1.5 opacity-90">
                <ShieldCheck className="w-4 h-4 text-[#C7A45B]" />
                <span>AC Night Stay</span>
              </div>
              <span className="opacity-40 select-none">·</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <Sparkles className="w-4 h-4 text-[#C7A45B]" />
                <span>Veg Thali & Dining</span>
              </div>
              <span className="opacity-40 select-none">·</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <MapPin className="w-4 h-4 text-[#C7A45B]" />
                <span>Highway Stop Bihar</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#arrive"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold uppercase tracking-wider border transition-all duration-200 ${
                  isDay
                    ? 'border-[#5A4634]/30 text-[#111214] hover:bg-[#5A4634]/10'
                    : 'border-white/20 text-[#F5F1E8] hover:bg-white/5'
                }`}
              >
                Explore GB Hotel
              </a>
            </div>
          </div>

          {/* Right Column: Large Cinematic Edge-to-Edge Visual with Golden Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Golden Accent Frame */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-[#C7A45B] via-[#D9CCB8]/40 to-[#C7A45B]/80 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#111214]">
                  <img
                    src={HOTEL_IMAGES.heroRoom}
                    alt="Comfortable bed and ambient lighting inside GB Hotel room in Dewkali"
                    className="w-full h-full object-cover zoom-image"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for subtle elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Visual Subtitle inside image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-medium tracking-wide">
                      Peaceful Rest • Air Conditioned
                    </span>
                    <span className="opacity-80 font-mono">Dewkali, Bihar</span>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge: 4.3 ★ | 117 Google Reviews (Do not change these numbers) */}
              <div
                className={`absolute -bottom-6 -left-4 sm:left-4 sm:-bottom-6 p-4 rounded-xl shadow-2xl border transition-all duration-300 backdrop-blur-md ${
                  isDay
                    ? 'bg-white/95 border-[#D9CCB8] text-[#111214]'
                    : 'bg-[#181a1d]/95 border-[#C7A45B]/40 text-[#F5F1E8]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#C7A45B] flex flex-col items-center justify-center text-[#111214] font-bold shadow-md">
                    <span className="text-sm leading-none">{HOTEL_INFO.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-[#111214] text-[#111214] mt-0.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold tracking-wide mt-0.5">
                      {HOTEL_INFO.reviewsCount} Google Reviews
                    </p>
                    <p className="text-[11px] opacity-70">Verified Travellers</p>
                  </div>
                </div>
              </div>

              {/* Secondary corner pill */}
              <div
                className={`hidden sm:flex absolute -top-4 -right-2 px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-md ${
                  isDay
                    ? 'bg-white/90 border-[#D9CCB8] text-[#5A4634]'
                    : 'bg-[#111214]/90 border-white/20 text-[#C7A45B]'
                }`}
              >
                Open 24 Hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
