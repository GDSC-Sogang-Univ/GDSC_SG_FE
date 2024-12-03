import type { PropsWithChildren } from 'react';

export default function MainpageLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
