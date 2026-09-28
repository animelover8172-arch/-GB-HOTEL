import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { useMood } from '../context/MoodContext';

export const FloatingActions: React.FC = () => {
  const { isDay } = useMood();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello GB Hotel Dewkali! I would like to enquire about room availability and dining.'
  );

  return (
    <>
      {/* Top Thin Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C7A45B] via-[#e5c780] to-[#C7A45B] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons (compact, responsive, non-intrusive) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-center gap-2.5">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-full border shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
              isDay
                ? 'bg-white border-[#D9CCB8] text-[#111214] hover:bg-[#F5F1E8]'
                : 'bg-[#181a1d] border-white/20 text-[#F5F1E8] hover:bg-[#202327]'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#C7A45B]" />
          </button>
        )}

        {/* WhatsApp Quick Link */}
        <a
          href={`https://wa.me/${HOTEL_INFO.phoneFormatted.replace('+', '')}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Chat with GB Hotel on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="sr-only">WhatsApp</span>
          <span className="hidden group-hover:block absolute right-14 whitespace-nowrap bg-black/90 text-white text-xs px-2.5 py-1 rounded shadow-md pointer-events-none">
            WhatsApp Front Desk
          </span>
        </a>

        {/* Call Quick Link */}
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-[#C7A45B] hover:bg-[#b59247] text-[#111214] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Call GB Hotel Dewkali"
        >
          <Phone className="w-5 h-5 fill-[#111214]" />
          <span className="sr-only">Call Hotel</span>
          <span className="hidden group-hover:block absolute right-14 whitespace-nowrap bg-black/90 text-white text-xs px-2.5 py-1 rounded shadow-md pointer-events-none">
            Call 099310 35601
          </span>
        </a>
      </div>
    </>
  );
};
