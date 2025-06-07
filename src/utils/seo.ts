const siteTitle = 'AQUAZONE Water Park';
const siteDescription = 'Los parques acuáticos más espectaculares del mundo. Vive una experiencia acuática inolvidable.';

export const defaultSEO = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://aquazone.com',
    site_name: siteTitle,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AQUAZONE Water Park',
      },
    ],
  },
  twitter: {
    handle: '@aquazone',
    site: '@aquazone',
    cardType: 'summary_large_image',
  },
};
