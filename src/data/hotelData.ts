import heroRoomImg from '../assets/images/regenerated_image_1790622119685.png';
import highwayExteriorImg from '../assets/images/regenerated_image_1790622124317.png';
import vegThaliImg from '../assets/images/veg_thali_dining_1790619818075.jpg';
import restaurantAmbienceImg from '../assets/images/restaurant_ambience_1790619829608.jpg';
import comfortableAcRoomImg from '../assets/images/comfortable_ac_room_1790619841194.jpg';

export interface HotelInfo {
  name: string;
  nameDevanagari: string;
  tagline: string;
  subheadline: string;
  address: string;
  plusCode: string;
  phone: string;
  phoneFormatted: string;
  rating: number;
  reviewsCount: number;
  mapsUrl: string;
  mapsEmbedUrl: string;
}

export const HOTEL_INFO: HotelInfo = {
  name: 'GB HOTEL',
  nameDevanagari: 'जीबी होटल',
  tagline: 'Rest Well. Dine Well. Continue Your Journey.',
  subheadline: 'A comfortable stay and welcoming dining experience in Dewkali, Sadatpur.',
  address: 'Dewkali, Sadatpur, Bihar 821109',
  plusCode: '5HFP+2V Dewkali, Bihar',
  phone: '099310 35601',
  phoneFormatted: '+919931035601',
  rating: 4.3,
  reviewsCount: 117,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5HFP%2B2V+Dewkali%2C+Bihar',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=5HFP%2B2V%20Dewkali%2C%20Bihar%20821109&t=&z=14&ie=UTF8&iwloc=&output=embed',
};

export const DEVELOPER_INFO = {
  creator: 'RoadsideDeveloper',
  text: 'Designed & Developed by RoadsideDeveloper',
  whatsapp: '+91 7654224826',
  whatsappRaw: '917654224826',
  call: '+91 8405918172',
  callRaw: '+918405918172',
};

export const HOTEL_IMAGES = {
  heroRoom: heroRoomImg,
  highwayExterior: highwayExteriorImg,
  vegThali: vegThaliImg,
  restaurantAmbience: restaurantAmbienceImg,
  comfortableAcRoom: comfortableAcRoomImg,
};

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    author: 'Suraj Mali',
    rating: 5,
    quote: 'Good service Veg thali Night rest bed ac room Open 24 hours',
    verified: true,
    tag: 'Stay & Dining Review',
  },
  {
    id: 2,
    author: 'Bipin Tiwari',
    rating: 5,
    quote: '10 month Very good tasty food Staff working all time Language good maineger',
    verified: true,
    tag: 'Food & Hospitality Review',
  },
  {
    id: 3,
    author: 'Moumita Roy',
    rating: 5,
    quote: 'We stayed there in October for 2 days with our family and our pet dog.',
    verified: true,
    tag: 'Family Road Trip Review',
  },
];

export const EXPERIENCE_STEPS = [
  {
    number: '01',
    title: 'ARRIVE',
    tagline: 'Easy-to-find roadside hospitality.',
    description:
      'Conveniently situated in Dewkali, Sadatpur, Bihar. Smooth access right off the road with ample parking and round-the-clock reception to welcome weary travellers.',
    image: highwayExteriorImg,
  },
  {
    number: '02',
    title: 'REST',
    tagline: 'Comfortable accommodation.',
    description:
      'Air-conditioned rooms with fresh linen, clean beds, and peaceful ambience engineered for deep restful sleep after long hours behind the wheel.',
    image: comfortableAcRoomImg,
  },
  {
    number: '03',
    title: 'DINE',
    tagline: 'Vegetarian and Indian dining experience.',
    description:
      'Authentic fresh food prepared hot. Famously savoured for our wholesome Veg Thali, warm rotis, and hearty regional Indian meals whenever hunger strikes.',
    image: vegThaliImg,
  },
  {
    number: '04',
    title: 'RELAX',
    tagline: 'A calm place to pause during your journey.',
    description:
      'A soothing environment with warm hospitality, attentive staff, and family-friendly dining where you can rejuvenate before the next leg of your trip.',
    image: restaurantAmbienceImg,
  },
  {
    number: '05',
    title: 'CONTINUE',
    tagline: 'Leave refreshed and continue your trip.',
    description:
      'Re-energised, well-fed, and rested, set out on the highway with peace of mind. A hospitality stop built specifically for the road.',
    image: heroRoomImg,
  },
];

export const DINING_CATEGORIES = [
  {
    name: 'Vegetarian Special',
    badge: 'Guest Favourite',
    highlight: 'Special Veg Thali',
    desc: 'Pure, freshly made vegetarian platter with aromatic dal, paneer sabzi, seasonal vegetables, steaming rice, and freshly toasted rotis.',
    features: ['Freshly Prepared', 'Pure Veg Options', 'Homestyle Taste'],
  },
  {
    name: 'Indian Specialties',
    badge: 'Popular',
    highlight: 'North Indian & Regional Flavours',
    desc: 'Rich curries, fragrant rice preparations, freshly baked breads, and classic roadside dhaba-style specialties seasoned with authentic spices.',
    features: ['Hot & Fresh', 'Authentic Spices', 'Hearty Portions'],
  },
  {
    name: 'Family Dining',
    badge: 'Spacious',
    highlight: 'Comfortable Hall Seating',
    desc: 'Spacious, clean dining setup welcoming families, road-tripping groups, and travellers seeking a calm table to dine together.',
    features: ['Family Friendly', 'Clean Seating', 'Quick Service'],
  },
  {
    name: 'Beverages & Refreshment',
    badge: 'Any Time',
    highlight: 'Hot Chai & Cool Refreshments',
    desc: 'Freshly brewed hot masala tea, coffee, cold beverages, and bottled drinking water to keep you refreshed and alert on the highway.',
    features: ['Hot Masala Chai', 'Chilled Drinks', 'Instant Energy'],
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Comfortable AC Rooms',
    category: 'Stay',
    image: comfortableAcRoomImg,
    caption: 'Air-conditioned rooms tailored for a deep and peaceful night rest.',
  },
  {
    id: 2,
    title: 'Highway Roadside Presence',
    category: 'Arrive',
    image: highwayExteriorImg,
    caption: 'Welcoming exterior facade in Dewkali, Sadatpur, Bihar.',
  },
  {
    id: 3,
    title: 'Authentic Veg Thali',
    category: 'Dining',
    image: vegThaliImg,
    caption: 'Wholesome Vegetarian Thali praised consistently by travellers.',
  },
  {
    id: 4,
    title: 'Restaurant Ambience',
    category: 'Dining',
    image: restaurantAmbienceImg,
    caption: 'Warm ambient lighting and comfortable seating for families and travellers.',
  },
  {
    id: 5,
    title: 'Peaceful Night Stay Bed',
    category: 'Stay',
    image: heroRoomImg,
    caption: 'Well-appointed bedding with soft reading lamps and clean linens.',
  },
];
