export function generateSEOTags({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords: string[];
}) {
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
  };
}
