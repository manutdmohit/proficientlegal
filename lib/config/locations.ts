import { LocationConfig } from '@/types/location';

export const LOCATIONS_CONFIG: LocationConfig = {
  locations: {
    sydney: {
      city: 'Sydney',
      address: 'Level 1, 123 George Street, Sydney CBD NSW 2000, Australia',
      phone: '02 8006 5135',
      mapsUrl: 'https://maps.app.goo.gl/z1xg6gA3vStce7Dj6',
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
      address: 'Level 1, 456 Collins Street, Melbourne CBD VIC 3000, Australia',
      phone: '03 9070 9950',
      mapsUrl: 'https://maps.app.goo.gl/Xs3GXj8dBmXsDvHU8',
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
