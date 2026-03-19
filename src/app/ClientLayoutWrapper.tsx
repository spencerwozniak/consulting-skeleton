// src/app/ClientLayoutWrapper.tsx
'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="mt-15">{children}</div>
      <Footer />
    </>
  );
}