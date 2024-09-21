// 비로그인시 접근이 불가능한 페이지

import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/_authoptions';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div>
      <h1>로그인 정보</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
