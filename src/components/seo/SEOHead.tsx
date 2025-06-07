import Head from 'next/head';
import { defaultSEO } from '@/utils/seo';

const SEOHead = () => {
  return (
    <Head>
      <title>{defaultSEO.title}</title>
      <meta name="description" content={defaultSEO.description} />
      <meta property="og:title" content={defaultSEO.title} />
      <meta property="og:description" content={defaultSEO.description} />
      <meta property="og:image" content={defaultSEO.openGraph.images[0].url} />
      <meta name="twitter:card" content={defaultSEO.twitter.cardType} />
      <meta name="twitter:site" content={defaultSEO.twitter.site} />
      <meta name="twitter:title" content={defaultSEO.title} />
      <meta name="twitter:description" content={defaultSEO.description} />
      <meta name="twitter:image" content={defaultSEO.openGraph.images[0].url} />
    </Head>
  );
};

export default SEOHead;
