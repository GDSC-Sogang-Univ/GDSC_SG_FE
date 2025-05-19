'use client';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Script from 'next/script';
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

  useEffect(() => {
    if (window.hljs) {
      window.hljs.highlightAll();
    }
  }, [mdxSource]);

  if (!mdxSource || !MDXRemoteComponent) return <div>Loading...</div>;

  return (
    <>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js'
        strategy='afterInteractive'
        onLoad={() => {
          if (window.hljs) {
            window.hljs.highlightAll();
          }
        }}
      ></Script>
      <div>
        <MDXRemoteComponent {...mdxSource} />
      </div>
    </>
  );
};

export default PostBody;
