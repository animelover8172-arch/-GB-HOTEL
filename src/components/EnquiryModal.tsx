import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { useMood } from '../context/MoodContext';
import { X, MessageSquare, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const { isDay } = useMood();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');

  if (!isOpen) return null;

  const handleSend = (type: 'whatsapp' | 'call') => {
    if (type === 'call') {
      window.location.href = `tel:${HOTEL_INFO.phone}`;
      return;
    }

    if (!name.trim() || !phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `*GB HOTEL ENQUIRY - DEWKALI, BIHAR*\n\n` +
      `👤 *Guest Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      (request ? `📝 *Enquiry / Requirement:* ${request}\n` : '') +
      `\nHello GB Hotel Team, please provide room availability and details. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${HOTEL_INFO.phoneFormatted.replace('+', '')}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-lg rounded-2xl border shadow-2xl p-6 sm:p-8 relative ${
          isDay ? 'bg-[#F5F1E8] text-[#111214] border-[#D9CCB8]' : 'bg-[#181a1d] text-[#F5F1E8] border-white/10'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#C7A45B] font-semibold">
            GB HOTEL • DEWKALI
          </span>
          <h3 className="text-2xl font-bold font-serif">Quick Enquiry & Availability</h3>
          <p className="text-xs opacity-75">
            Connect directly to front desk reception in Sadatpur, Dewkali, Bihar (Open 24 Hours).
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Your Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Anand Singh"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                isDay ? 'bg-white border-[#D9CCB8] text-[#111214]' : 'bg-[#111214] border-neutral-700 text-white'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 098765 43210"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                isDay ? 'bg-white border-[#D9CCB8] text-[#111214]' : 'bg-[#111214] border-neutral-700 text-white'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Dates / Rooms / Food Requirement
            </label>
            <textarea
              rows={3}
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="AC room for 2 people, tonight arrival, need dinner thali..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A45B] ${
                isDay ? 'bg-white border-[#D9CCB8] text-[#111214]' : 'bg-[#111214] border-neutral-700 text-white'
              }`}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="button"
              onClick={() => handleSend('whatsapp')}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => handleSend('call')}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-md text-xs font-semibold uppercase tracking-wider border border-[#C7A45B] text-[#C7A45B] hover:bg-[#C7A45B]/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] opacity-70 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C7A45B]" />
            <span>Direct hotel contact • 099310 35601</span>
          </div>
        </div>
      </div>
    </div>
  );
};
