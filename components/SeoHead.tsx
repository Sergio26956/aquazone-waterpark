import Head from 'next/head';
import { generateMetaTags } from '@/lib/seo';

interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function SeoHead({ title, description, image, url }: Props) {
  const metaTags = generateMetaTags({ title, description, image, url });

  return (
    <Head>
      <title>{title}</title>
      {metaTags.map((tag, i) =>
        tag.name ? (
          <meta key={i} name={tag.name} content={tag.content} />
        ) : (
          <meta key={i} property={tag.property!} content={tag.content} />
        )
      )}
    </Head>
  );
}
