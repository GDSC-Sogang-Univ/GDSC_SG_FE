import PostBody from '@/app/blog/detail/[category]/[slug]/(components)/PostBody';
import { PostType } from '@/types/blog';
import Image from 'next/image';

export default function DetailPageContents({ post }: { post: PostType }) {
  return (
    <section className='flex flex-col gap-6'>
      <div className='w-8 h-1 bg-gdsc-Grey-700'></div>
      <div className='relative rounded-xl overflow-hidden w-full'>
        {post.thumbnail && (
          <Image
            src={post.thumbnail || '/og-image.png'}
            alt={post.title}
            width={1200}
            height={600}
            className='w-full h-auto object-contain object-center'
            priority
          />
        )}
      </div>
      <PostBody content={post.content} />
    </section>
  );
}
