import React from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Navigation, MapPin, Compass } from 'lucide-react';

export const ArriveSection: React.FC = () => {
  const { isDay } = useMood();

  return (
    <section id="arrive" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B]">
              <Compass className="w-3.5 h-3.5" />
              <span>01 / The Roadside Stop</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-balance"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              YOUR JOURNEY, MADE COMFORTABLE
            </h2>
          </div>

          <div className="max-w-md">
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              A welcoming place to pause, refresh and continue your journey. Whether crossing Bihar on a long expedition or seeking overnight repose, GB Hotel stands ready.
            </p>
          </div>
        </div>

        {/* Full-width Travel / Road / Hotel Image Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/30 group">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative bg-[#111214]">
            <img
              src={HOTEL_IMAGES.highwayExterior}
              alt="GB Hotel exterior on highway in Dewkali Sadatpur Bihar"
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Overlay Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* Overlaid Location & Direction Bar */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="text-white space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#C7A45B] font-semibold tracking-wider uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>Prime Highway Location</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Dewkali, Sadatpur, Bihar 821109
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono">
                  Plus Code: 5HFP+2V Dewkali, Bihar
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-lg transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-200"
                >
                  <span>Call 099310 35601</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div
            className={`p-5 rounded-xl border transition-colors ${
              isDay ? 'bg-white/60 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
            }`}
          >
            <span className="text-xs font-mono text-[#C7A45B] block mb-1">01.01</span>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-1">Roadside Accessibility</h4>
            <p className="text-xs opacity-75 leading-relaxed">
              Direct highway approach in Sadatpur, Dewkali with unhindered pull-in for cars and SUVs.
            </p>
          </div>
          <div
            className={`p-5 rounded-xl border transition-colors ${
              isDay ? 'bg-white/60 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
            }`}
          >
            <span className="text-xs font-mono text-[#C7A45B] block mb-1">01.02</span>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-1">Round-the-Clock Arrival</h4>
            <p className="text-xs opacity-75 leading-relaxed">
              Night or day, open 24 hours to accommodate road schedules and unexpected delays.
            </p>
          </div>
          <div
            className={`p-5 rounded-xl border transition-colors ${
              isDay ? 'bg-white/60 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
            }`}
          >
            <span className="text-xs font-mono text-[#C7A45B] block mb-1">01.03</span>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-1">Safe Highway Pause</h4>
            <p className="text-xs opacity-75 leading-relaxed">
              Family-tested stop with warm, helpful staff and dependable local hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
