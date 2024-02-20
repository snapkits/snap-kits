import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'SnapKits',
  description: 'App to manage your billing and finance management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark scroll-smooth bg-black'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
