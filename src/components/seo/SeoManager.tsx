'use client';
import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
}

export default function SeoManager({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
