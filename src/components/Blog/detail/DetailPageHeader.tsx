import { PostType } from '@/types/blog';

export default function DetailPageHeader({ post }: { post: PostType }) {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-[24px] text-gdsc-Red-500'>{post.category}</p>
      <p className='text-[48px] font-bold text-gdsc-Black cp_mobile:text-[32px]'>{post.title}</p>
      <div className='flex gap-3'>
        {post.tags.map(tag => (
          <div
            className='px-6 py-2 rounded-full flex items-center justify-center text-gdsc-Red-300 border border-gdsc-Red-300 cp_mobile:text-[12px] cp_mobile:px-[14px] cp_mobile:py-[6px]'
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className='mt-[36px] flex gap-6 text-gdsc-Grey-900'>
        <div>{post.date}</div>
        <div className='text-gdsc-Gray-200'>|</div>
        <div>{post.author}</div>
      </div>
    </div>
  );
}
