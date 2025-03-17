'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { useEffect, useState } from 'react';

const PostBody = ({ content }: { content: string }) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const source = await serialize(content);
      setMdxSource(source);
    };

    fetchData();
  }, [content]);

  if (!mdxSource) return <div>Loading...</div>;

  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default PostBody;
