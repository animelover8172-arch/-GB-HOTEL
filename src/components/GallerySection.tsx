import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { isDay } = useMood();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section
      id="gallery"
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
              <Camera className="w-3.5 h-3.5" />
              <span>05 / Visual Narrative</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              A GLIMPSE OF GB
            </h2>
          </div>

          <div className="max-w-md">
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
              }`}
            >
              An asymmetric editorial view into life at GB Hotel: from air-conditioned quiet bedrooms and roadside presence to steaming hot vegetarian thalis.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Item 1: Large Featured Card (AC Room) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#181a1d] shadow-lg border border-neutral-700/20"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                {GALLERY_ITEMS[0].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">{GALLERY_ITEMS[0].title}</h3>
              <p className="text-xs text-neutral-300 mt-1">{GALLERY_ITEMS[0].caption}</p>
            </div>
          </div>

          {/* Item 2: Vertical Card (Highway Roadside Presence) */}
          <div
            onClick={() => openLightbox(1)}
            className="md:col-span-5 group cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-auto bg-[#181a1d] shadow-lg border border-neutral-700/20"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                {GALLERY_ITEMS[1].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif">{GALLERY_ITEMS[1].title}</h3>
              <p className="text-xs text-neutral-300 mt-1">{GALLERY_ITEMS[1].caption}</p>
            </div>
          </div>

          {/* Item 3: Veg Thali */}
          <div
            onClick={() => openLightbox(2)}
            className="md:col-span-4 group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#181a1d] shadow-lg border border-neutral-700/20"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                {GALLERY_ITEMS[2].category}
              </span>
              <h3 className="text-lg font-bold font-serif">{GALLERY_ITEMS[2].title}</h3>
              <p className="text-xs text-neutral-300 mt-1">{GALLERY_ITEMS[2].caption}</p>
            </div>
          </div>

          {/* Item 4: Restaurant Ambience */}
          <div
            onClick={() => openLightbox(3)}
            className="md:col-span-4 group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#181a1d] shadow-lg border border-neutral-700/20"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                {GALLERY_ITEMS[3].category}
              </span>
              <h3 className="text-lg font-bold font-serif">{GALLERY_ITEMS[3].title}</h3>
              <p className="text-xs text-neutral-300 mt-1">{GALLERY_ITEMS[3].caption}</p>
            </div>
          </div>

          {/* Item 5: Peaceful Bed Night */}
          <div
            onClick={() => openLightbox(4)}
            className="md:col-span-4 group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#181a1d] shadow-lg border border-neutral-700/20"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              className="w-full h-full object-cover zoom-image"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
                {GALLERY_ITEMS[4].category}
              </span>
              <h3 className="text-lg font-bold font-serif">{GALLERY_ITEMS[4].title}</h3>
              <p className="text-xs text-neutral-300 mt-1">{GALLERY_ITEMS[4].caption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 backdrop-blur-lg animate-in fade-in duration-200">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center text-white mt-4 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C7A45B]">
                {GALLERY_ITEMS[activeLightboxIndex].category} • {activeLightboxIndex + 1} of{' '}
                {GALLERY_ITEMS.length}
              </span>
              <h4 className="text-xl font-bold font-serif">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-neutral-300">
                {GALLERY_ITEMS[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
