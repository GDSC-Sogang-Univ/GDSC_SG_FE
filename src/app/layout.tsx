import type { Metadata } from 'next';
import ClientProvider from './_ClientProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'GDSC Sogang',
  description: 'GDSC Sogang Homepage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
