import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'GDG on Campus Sogang',
  description: 'Google Developer Groups on Sogang University',
  icons: {
    icon: '/gdg_logo.svg',
    shortcut: '/gdg_sg_logo.png',
    apple: '/gdg_sg_logo.png',
  },
  openGraph: {
    url: 'https://gdg-campus-sg.com/',
    type: 'website',
    siteName: 'GDG on Campus : Sogang Univ',
    images: [
      {
        url: 'https://gdg-campus-sg.com/og-image.png',
        alt: 'GDG on Campus : Sogang Univ',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
