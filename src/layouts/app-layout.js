import * as React from 'react';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};
