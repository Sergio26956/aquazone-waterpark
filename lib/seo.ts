export function generateMetaTags({
  title,
  description,
  image = '/logo.png',
  url = 'https://aquazone-waterpark.com',
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}) {
  return [
    { name: 'title', content: title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
}
