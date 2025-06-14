import { ReactNode } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
