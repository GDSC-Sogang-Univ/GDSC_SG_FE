'use client';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect, useState } from 'react';

const PostBody = ({ content }: { content: string }) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [MDXRemoteComponent, setMDXRemoteComponent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 동적으로 모듈 가져오기
      const { serialize } = await import('next-mdx-remote/serialize');
      const { MDXRemote } = await import('next-mdx-remote');
      
      const source = await serialize(content);
      setMdxSource(source);
      setMDXRemoteComponent(() => MDXRemote);
    };

    fetchData();
  }, [content]);

  if (!mdxSource || !MDXRemoteComponent) return <div>Loading...</div>;

  return (
    <div>
      <MDXRemoteComponent {...mdxSource} />
    </div>
  );
};

export default PostBody;
