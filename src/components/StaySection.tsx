import React from 'react';
import { HOTEL_IMAGES } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Wind, Moon, Clock, BedDouble, Check } from 'lucide-react';

interface StaySectionProps {
  onOpenEnquiry: () => void;
}

export const StaySection: React.FC<StaySectionProps> = ({ onOpenEnquiry }) => {
  const { isDay } = useMood();

  return (
    <section
      id="stay"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 ${
        isDay
          ? 'bg-[#F5F1E8] border-[#D9CCB8] text-[#111214]'
          : 'bg-[#111214] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] mb-2">
            <span>02 / Accommodation</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-balance"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            REST AFTER THE ROAD
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
              isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
            }`}
          >
            Clean, cool, and peaceful bedrooms specifically kept ready for travellers and families needing genuine night rest along the route.
          </p>
        </div>

        {/* Room Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Room Imagery */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/20 group">
              <div className="aspect-[4/3] bg-[#181a1d]">
                <img
                  src={HOTEL_IMAGES.comfortableAcRoom}
                  alt="Comfortable AC bedroom at GB Hotel Dewkali Bihar"
                  className="w-full h-full object-cover zoom-image"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Feature Overlay Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#111214]/85 text-[#C7A45B] backdrop-blur-md border border-[#C7A45B]/30">
                  AC Equipped
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#111214]/85 text-white backdrop-blur-md border border-white/20">
                  Night Stay Ready
                </span>
              </div>
            </div>
          </div>

          {/* Clean Card: "Comfortable Stay" */}
          <div className="lg:col-span-5">
            <div
              className={`p-8 sm:p-10 rounded-2xl border shadow-xl relative ${
                isDay
                  ? 'bg-white/80 border-[#D9CCB8]'
                  : 'bg-[#181a1d] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-300 dark:border-neutral-800">
                <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                  Verified Guest Facility
                </span>
                <span className="text-xs opacity-60 font-mono">Dewkali, Bihar</span>
              </div>

              <div className="pt-6">
                <h3
                  className="text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Comfortable Stay
                </h3>
                <p
                  className={`mt-3 text-sm sm:text-base leading-relaxed ${
                    isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
                  }`}
                >
                  Designed for guests who need a comfortable place to rest during their journey.
                </p>
              </div>

              {/* Supported Verified Facts Only */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0 mt-0.5">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide">AC Room</h4>
                    <p className="text-xs opacity-75 mt-0.5">
                      Air-conditioned cooling ensuring deep relief from roadside heat and humidity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0 mt-0.5">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide">Night Rest Bed</h4>
                    <p className="text-xs opacity-75 mt-0.5">
                      Clean double bedding with fresh sheets, pillows, and quiet nighttime atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide">Open 24 Hours</h4>
                    <p className="text-xs opacity-75 mt-0.5">
                      Travellers arriving at odd hours of the night receive immediate welcome and shelter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Review Quote Highlight */}
              <div className="mt-8 p-3.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs italic opacity-90">
                &ldquo;Good service... Night rest bed ac room Open 24 hours&rdquo;
                <span className="block not-italic font-semibold text-[11px] text-[#C7A45B] mt-1">
                  — Suraj Mali (Google Review)
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="w-full py-3.5 px-6 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-md transition-all duration-200 text-center"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
