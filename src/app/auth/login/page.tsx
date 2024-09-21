'use client';
import { signIn } from 'next-auth/react';

export default function HomePage() {
  return (
    <main className='p-4'>
      <h1 className='mb-4 text-H1_KR'>Login</h1>
      <button className='p-4 bg-gdsc-Blue-900 text-gdsc-White' onClick={() => signIn('google')}>
        Sign in with Google
      </button>
    </main>
  );
}
