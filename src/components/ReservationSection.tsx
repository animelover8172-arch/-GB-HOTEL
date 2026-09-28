import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { Calendar, Phone, Users, MessageSquare, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ReservationSectionProps {
  onSuccessNotice?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  const { isDay } = useMood();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (actionType: 'check' | 'whatsapp') => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const message = `*GB HOTEL ENQUIRY - DEWKALI, BIHAR*\n\n` +
      `👤 *Guest Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Check-in Date:* ${formData.checkIn || 'To be confirmed'}\n` +
      `📅 *Check-out Date:* ${formData.checkOut || 'To be confirmed'}\n` +
      `👥 *Number of Guests:* ${formData.guests}\n` +
      (formData.specialRequest ? `📝 *Special Request:* ${formData.specialRequest}\n` : '') +
      `\nHello GB Hotel Team, please let me know room availability and details. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.phoneFormatted.replace('+', '')}?text=${encoded}`;

    if (actionType === 'whatsapp' || actionType === 'check') {
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="enquiry"
      className={`py-20 lg:py-28 border-t transition-colors duration-500 relative ${
        isDay
          ? 'bg-[#F5F1E8] border-[#D9CCB8] text-[#111214]'
          : 'bg-[#111214] border-white/10 text-[#F5F1E8]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A45B] mb-2">
            <span>Direct Reception Enquiries</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            PLAN YOUR STAY & DINING
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${
              isDay ? 'text-[#5A4634]' : 'text-[#D9CCB8]'
            }`}
          >
            Direct connection to GB Hotel front desk in Dewkali. Fast response for night halt accommodation, family rooms, and dining reservations.
          </p>
        </div>

        {/* The Booking & Enquiry Panel */}
        <div
          className={`p-8 sm:p-12 rounded-2xl border shadow-2xl relative transition-all duration-300 ${
            isDay
              ? 'bg-white/90 border-[#D9CCB8]'
              : 'bg-[#181a1d] border-white/10'
          }`}
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-serif">Enquiry Dispatched!</h3>
              <p className="text-sm opacity-80 max-w-md mx-auto">
                Opening WhatsApp to connect directly with GB Hotel Dewkali. Our front desk staff will assist you promptly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-md bg-[#C7A45B] text-[#111214] text-xs font-bold uppercase tracking-wider"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit('check');
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 098765 43210"
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  />
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  />
                </div>

                {/* Guests */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Guests / Travelling Party
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  >
                    <option value="1">1 Person (Solo Highway Traveller)</option>
                    <option value="2">2 Persons (Double Bed Room)</option>
                    <option value="3-4">3 - 4 Persons (Family Group)</option>
                    <option value="5+">5+ Persons (Large Travel Party)</option>
                  </select>
                </div>

                {/* Special Request */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                    Special Request (AC Room, Late Night Arrival, Veg Food)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    placeholder="e.g. Arriving at 11 PM, need AC double room and hot dinner thali for 2 people."
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                      isDay
                        ? 'bg-white border-[#D9CCB8] text-[#111214]'
                        : 'bg-[#121316] border-neutral-700 text-white'
                    }`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs opacity-75">
                  <ShieldCheck className="w-4 h-4 text-[#C7A45B]" />
                  <span>Direct front desk confirmation. No hidden charges.</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleSubmit('check')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111214] bg-[#C7A45B] hover:bg-[#b59247] shadow-md transition-all duration-200"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit('whatsapp')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
