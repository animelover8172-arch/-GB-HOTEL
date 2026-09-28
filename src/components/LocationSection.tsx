import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { MapPin, Phone, Navigation, Clock, ShieldCheck, Copy, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { isDay } = useMood();
  const [copied, setCopied] = React.useState(false);

  const copyPlusCode = () => {
    navigator.clipboard.writeText(HOTEL_INFO.plusCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="location"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 ${
        isDay
          ? 'bg-[#ECE5D8]/40 border-[#D9CCB8] text-[#111214]'
          : 'bg-[#141518] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Address, Phone, Plus Code, Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B]">
              <MapPin className="w-3.5 h-3.5" />
              <span>06 / Coordinates & Reach</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              FIND GB HOTEL
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              Positioned conveniently in Dewkali, Sadatpur, Bihar for ease of highway approach, rest stops, and meal breaks.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              {/* Address card */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  isDay ? 'bg-white/80 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider opacity-60 block">
                    Postal Address
                  </span>
                  <p className="text-base font-semibold mt-0.5">{HOTEL_INFO.address}</p>
                </div>
              </div>

              {/* Plus Code card */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  isDay ? 'bg-white/80 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider opacity-60 block">
                      Google Maps Plus Code
                    </span>
                    <p className="text-base font-mono font-semibold mt-0.5">{HOTEL_INFO.plusCode}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyPlusCode}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs flex items-center gap-1 font-mono text-[#C7A45B]"
                  title="Copy Plus Code"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500 font-sans">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone card */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  isDay ? 'bg-white/80 border-[#D9CCB8]' : 'bg-[#181a1d] border-white/10'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#C7A45B]/15 text-[#C7A45B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider opacity-60 block">
                      Direct Front Desk
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="text-base font-semibold hover:text-[#C7A45B] transition-colors mt-0.5 block"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium">
                  24 Hours
                </span>
              </div>
            </div>

            {/* Action Buttons: Call Hotel & Get Directions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotel</span>
              </a>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider border transition-all duration-200 ${
                  isDay
                    ? 'border-[#5A4634]/30 text-[#111214] hover:bg-[#5A4634]/10'
                    : 'border-white/20 text-[#F5F1E8] hover:bg-white/5'
                }`}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Rounded Google Maps Container */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/30 p-1 bg-gradient-to-tr from-[#C7A45B]/40 via-neutral-700/20 to-[#C7A45B]/30">
              <div className="rounded-xl overflow-hidden relative aspect-[4/3] sm:aspect-[16/11] bg-[#181a1d]">
                <iframe
                  title="GB Hotel Dewkali Bihar Location Map"
                  src={HOTEL_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: isDay ? 'none' : 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Label Badge */}
                <div className="absolute top-4 left-4 bg-[#111214]/90 backdrop-blur-md text-white text-xs p-3 rounded-lg border border-[#C7A45B]/40 shadow-xl pointer-events-none">
                  <p className="font-bold text-[#C7A45B]">{HOTEL_INFO.name} • {HOTEL_INFO.nameDevanagari}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">Dewkali, Sadatpur, Bihar 821109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
