import '@/styles/globals.css';
import { ReactNode } from 'react';

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
