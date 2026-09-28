import React from 'react';
import { HOTEL_INFO, DEVELOPER_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Phone, MapPin, MessageSquare, Globe, Heart, Star, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isDay } = useMood();

  return (
    <footer
      className={`border-t transition-colors duration-500 pt-16 pb-12 ${
        isDay
          ? 'bg-[#EAE2D2] border-[#D9CCB8] text-[#111214]'
          : 'bg-[#0d0e10] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-black/10 dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span
                className="text-2xl font-bold tracking-tight uppercase"
                style={{ fontFamily: 'Cinzel, Georgia, serif' }}
              >
                {HOTEL_INFO.name}
              </span>
              <p className="text-sm font-semibold text-[#C7A45B]">
                {HOTEL_INFO.nameDevanagari}
              </p>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              Modern roadside hospitality, air-conditioned rooms, and genuine Indian vegetarian dining in Dewkali, Sadatpur, Bihar.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-semibold">
                {HOTEL_INFO.rating} Rating ({HOTEL_INFO.reviewsCount} Google Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A45B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#stay" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  AC Night Stay
                </a>
              </li>
              <li>
                <a href="#dining" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  Veg Thali & Dining
                </a>
              </li>
              <li>
                <a href="#experience" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  Five-Stage Journey
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="opacity-80 hover:opacity-100 hover:text-[#C7A45B] transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A45B]">
              Location
            </h4>
            <div className="space-y-2 text-xs leading-relaxed opacity-85">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C7A45B] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </p>
              <p className="flex items-start gap-2 font-mono text-[11px]">
                <Compass className="w-4 h-4 text-[#C7A45B] shrink-0 mt-0.5" />
                <span>Plus Code: {HOTEL_INFO.plusCode}</span>
              </p>
              <p className="text-[11px] text-[#C7A45B] pt-1">
                Open 24 Hours Front Desk for Travellers
              </p>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A45B]">
              Contact Hotel
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-2 text-xs font-semibold opacity-90 hover:text-[#C7A45B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C7A45B]" />
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.phoneFormatted.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold opacity-90 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Available</span>
              </a>

              <div className="pt-2">
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] underline underline-offset-4 opacity-75 hover:opacity-100"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Developer Credit Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center md:text-left opacity-75">
            <p>© {new Date().getFullYear()} GB HOTEL (जीबी होटल) Dewkali, Sadatpur, Bihar. All rights reserved.</p>
          </div>

          {/* Mandatory Credit Card */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <span className="font-semibold text-[#C7A45B]">
              Created by {DEVELOPER_INFO.creator}
            </span>
            <span className="opacity-30 select-none hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Globe className="w-3.5 h-3.5 text-[#C7A45B]" />
              <span>{DEVELOPER_INFO.text}</span>
            </span>
            <span className="opacity-30 select-none hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${DEVELOPER_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp: {DEVELOPER_INFO.whatsapp}</span>
            </a>
            <span className="opacity-30 select-none hidden sm:inline">|</span>
            <a
              href={`tel:${DEVELOPER_INFO.callRaw}`}
              className="flex items-center gap-1 hover:text-[#C7A45B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A45B]" />
              <span>Call: {DEVELOPER_INFO.call}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
