'use client';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const PostBody = ({ content }: { content: string }) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [MDXRemoteComponent, setMDXRemoteComponent] = useState<any>(null);
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});

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
    if (mdxSource) {
      // MDX 콘텐츠가 렌더링된 후 blockquote 처리
      const blockquotes = document.querySelectorAll('blockquote');
      blockquotes.forEach((blockquote) => {
        const firstParagraph = blockquote.querySelector('p');
        if (firstParagraph && firstParagraph.textContent?.startsWith('💡')) {
          blockquote.classList.add('markdown-callout', 'markdown-callout-tip');
        }
      });

      // 체크박스 처리
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach((p) => {
        const text = p.innerHTML;
        const checkboxRegex = /\[([ x])\]/g;
        const newText = text.replace(checkboxRegex, (match, state) => {
          const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
          const isChecked = state === 'x';
          setCheckboxStates(prev => ({ ...prev, [checkboxId]: isChecked }));
          
          return `<input type="checkbox" id="${checkboxId}" ${isChecked ? 'checked' : ''} 
            style="margin-right: 8px;" 
            onchange="window.handleCheckboxChange('${checkboxId}')" />`;
        });
        
        if (newText !== text) {
          p.innerHTML = newText;
        }
      });
    }
  }, [mdxSource]);

  useEffect(() => {
    // 체크박스 상태 변경 핸들러를 전역에 등록
    (window as any).handleCheckboxChange = (checkboxId: string) => {
      setCheckboxStates(prev => {
        const newState = { ...prev, [checkboxId]: !prev[checkboxId] };
        return newState;
      });
    };

    return () => {
      delete (window as any).handleCheckboxChange;
    };
  }, []);

  useEffect(() => {
    if (window.hljs) {
      window.hljs.highlightAll();
    }
  }, [mdxSource]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/style/mdxBody.css'; // public 폴더 기준 경로
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
