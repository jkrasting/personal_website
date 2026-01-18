import heroImage from './assets/shore.jpg';

export const SITE = {
  website: 'https://johnkrasting.com/',
  author: 'Dr. John P. Krasting',
  description: 'Climate scientist at NOAA GFDL specializing in sea level rise, ocean dynamics, and Earth system modeling.',
  title: 'Dr. John P. Krasting',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: false,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // Lab Info
  labName: 'Dr. John P. Krasting',
  university: 'NOAA GFDL | Princeton University | Rutgers University',
  logo: '/assets/logo-real.svg', // Logo path
  avatar: '/assets/logo-real.svg', // Avatar for SEO/Schema
  email: 'John.Krasting@noaa.gov',

  // Hero Section (Home Page)
  hero: {
    title: 'Climate Science Research & Education',
    subtitle: 'Physical Scientist at NOAA GFDL | Lecturer at Princeton & Rutgers',
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Home', link: '/', key: 'home' },
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Publications', link: '/publications', key: 'publications' },
    { text: 'Achievements', link: '/achievements', key: 'achievements' },
    { text: 'Teaching', link: '/teaching', key: 'teaching' },
    { text: 'CV', link: '/cv', key: 'cv' },
    { text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after navigation)
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],

  // i18n Config
  i18n: {
    enabled: false,
    defaultLocale: 'en',
  }
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://github.com/fjd2004711/scholar-lite',
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' = 'en'; 
