import React from 'react';
import { HOTEL_INFO, CUSTOMER_REVIEWS } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';

export const CustomerStories: React.FC = () => {
  const { isDay } = useMood();

  return (
    <section
      id="reviews"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 ${
        isDay
          ? 'bg-[#ECE5D8]/40 border-[#D9CCB8] text-[#111214]'
          : 'bg-[#0f1012] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] mb-2">
            <span>Customer Stories</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            WORDS FROM THE ROAD
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
            }`}
          >
            Unedited customer reviews from verified travellers on Google Maps.
          </p>
        </div>

        {/* 3 Refined Quotation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                isDay
                  ? 'bg-white border-[#D9CCB8] shadow-md hover:shadow-lg'
                  : 'bg-[#181a1d] border-white/10 hover:border-[#C7A45B]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C7A45B]/40" />
                </div>

                {/* Quotation text - EXACT verbatim as provided */}
                <p className="text-base sm:text-lg font-serif italic leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold tracking-wide">{review.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#C7A45B] mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Google Verified Review</span>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Google Trust Section: 4.3 ★ | 117 Google Reviews | GB HOTEL */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border text-center max-w-3xl mx-auto shadow-xl transition-all duration-300 ${
            isDay
              ? 'bg-white/90 border-[#D9CCB8]'
              : 'bg-[#181a1d]/90 border-white/10'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#C7A45B] flex flex-col items-center justify-center text-[#111214] font-bold shadow-md">
                <span className="text-2xl font-black leading-none font-mono">
                  {HOTEL_INFO.rating}
                </span>
                <Star className="w-4 h-4 fill-[#111214] text-[#111214] mt-1" />
              </div>
              <div className="text-left">
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight"
                  style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                >
                  {HOTEL_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#C7A45B] uppercase tracking-wider">
                  {HOTEL_INFO.reviewsCount} Google Reviews
                </p>
                <div className="flex items-center gap-1 text-amber-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-neutral-300 dark:bg-neutral-700" />

            <div>
              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-md transition-all duration-200"
              >
                <span>View Google Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
