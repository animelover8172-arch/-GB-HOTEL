import React, { useState } from 'react';
import { MoodProvider, useMood } from './context/MoodContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyIndicator } from './components/JourneyIndicator';
import { MoodExperience } from './components/MoodExperience';
import { ArriveSection } from './components/ArriveSection';
import { StaySection } from './components/StaySection';
import { DiningSection } from './components/DiningSection';
import { OpenAllDaySection } from './components/OpenAllDaySection';
import { ExperienceSection } from './components/ExperienceSection';
import { CustomerStories } from './components/CustomerStories';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { isDay } = useMood();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 selection:bg-[#C7A45B]/30 selection:text-[#C7A45B] ${
        isDay ? 'bg-[#F5F1E8] text-[#111214]' : 'bg-[#111214] text-[#F5F1E8]'
      }`}
    >
      {/* Floating Glass Navbar */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <main>
        {/* Cinematic Split-Screen Hero */}
        <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* 01 ARRIVE · 02 STAY · 03 DINE · 04 RELAX Journey Indicator */}
        <JourneyIndicator />

        {/* Two Moods Experience: DAY ☀ ━━━━━ ☾ NIGHT */}
        <MoodExperience />

        {/* Arrive: Your Journey, Made Comfortable */}
        <ArriveSection />

        {/* Stay: Rest After the Road (AC Room, Night Stay, Open 24 Hours) */}
        <StaySection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Food / Dining: Good Food, Any Time (Veg Thali Highlighted) */}
        <DiningSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* 24 Hours of Hospitality / Open When You Need Us */}
        <OpenAllDaySection />

        {/* Experience Section: 01 to 05 Editorial Blocks */}
        <ExperienceSection />

        {/* Customer Stories & Google Trust (Suraj Mali, Bipin Tiwari, Moumita Roy) */}
        <CustomerStories />

        {/* Asymmetric Editorial Gallery with Lightbox */}
        <GallerySection />

        {/* Location Section: Split Screen & Google Maps */}
        <LocationSection />

        {/* Reservation / Enquiry Panel */}
        <ReservationSection />
      </main>

      {/* Minimal Premium Footer with Mandatory RoadsideDeveloper Credits */}
      <Footer />

      {/* Floating Action Buttons & Scroll Progress */}
      <FloatingActions />

      {/* Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <MoodProvider>
      <AppContent />
    </MoodProvider>
  );
}
