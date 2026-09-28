import React, { createContext, useContext, useState, useEffect } from 'react';

type MoodMode = 'day' | 'night';

interface MoodContextType {
  mode: MoodMode;
  sliderValue: number; // 0 (day) to 100 (night)
  setSliderValue: (val: number) => void;
  toggleMode: () => void;
  setMode: (mode: MoodMode) => void;
  isDay: boolean;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sliderValue, setSliderValueState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('gb_hotel_mood');
      if (saved === 'day') return 0;
      if (saved === 'night') return 100;
      // Default to evening/night atmosphere which is cozy for hotel/roadside travel
      return 100;
    } catch {
      return 100;
    }
  });

  const mode: MoodMode = sliderValue < 50 ? 'day' : 'night';
  const isDay = mode === 'day';

  const setSliderValue = (val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    setSliderValueState(clamped);
    const newMode: MoodMode = clamped < 50 ? 'day' : 'night';
    try {
      localStorage.setItem('gb_hotel_mood', newMode);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const toggleMode = () => {
    setSliderValue(isDay ? 100 : 0);
  };

  const setMode = (m: MoodMode) => {
    setSliderValue(m === 'day' ? 0 : 100);
  };

  useEffect(() => {
    if (isDay) {
      document.documentElement.classList.add('day-mode');
      document.documentElement.classList.remove('night-mode');
    } else {
      document.documentElement.classList.add('night-mode');
      document.documentElement.classList.remove('day-mode');
    }
  }, [isDay]);

  return (
    <MoodContext.Provider
      value={{
        mode,
        sliderValue,
        setSliderValue,
        toggleMode,
        setMode,
        isDay,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};
