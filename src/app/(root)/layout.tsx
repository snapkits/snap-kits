import Footer from '@/components/Footer';
import { NavHeader } from '@/components/NavHeader';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavHeader />
      {children}
      <Footer />
    </>
  );
};

export default layout;
