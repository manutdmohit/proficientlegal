import { LocationConfig } from '@/types/location';

export const LOCATIONS_CONFIG: LocationConfig = {
  locations: {
    sydney: {
      city: 'Sydney',
      address: 'Suite 132 10 Park Road Hurstville NSW 2220',
      phone: '1300 011 581',
      mapsUrl: 'https://maps.app.goo.gl/mvtu7xboXdY27LZZ7',
      services: [
        'Expert Legal Case Assessment & Strategy',
        'Family Law Consultation & Advice',
        'Property Law & Conveyancing Services',
        'Immigration Law Consultation',
        'Document Review & Legal Analysis',
        'Court Representation & Litigation Support',
      ],
    },
    melbourne: {
      city: 'Melbourne',
      address: 'Suite 220 1 Queens Road, Melbourne, VIC 3004',
      phone: '1300 011 581',
      mapsUrl: 'https://maps.app.goo.gl/msDBUndEnjdGv8j47',
      services: [
        'Expert Legal Case Assessment & Strategy',
        'Family Law Consultation & Advice',
        'Property Law & Conveyancing Services',
        'Immigration Law Consultation',
        'Document Review & Legal Analysis',
        'Court Representation & Litigation Support',
      ],
    },
  },
  defaultBusinessHours: 'Mon-Fri: 9am-5pm',
  contactInfo: {
    phone: '1300 011 581',
    email: 'info@proficientlegal.com.au',
  },
} as const;
