// app/_ClientProvider.tsx
'use client';
import type { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function ClientProvider({ children }: PropsWithChildren<{}>) {
  return <SessionProvider session={null}>{children}</SessionProvider>;
}
