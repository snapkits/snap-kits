import Footer from '@/components/Footer';
import { NavHeader } from '@/components/NavHeader';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavHeader />
      <div className='pt-20'>{children}</div>
      <Footer />
    </>
  );
};

export default layout;
