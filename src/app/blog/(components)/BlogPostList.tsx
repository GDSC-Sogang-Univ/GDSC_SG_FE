import VerticalCard from '@/components/Blog/VerticalCard';

interface Props {
  data: any[];
}

/**
 * post 레이아웃
 */
const BlogPostList = ({ data }: Props) => {
  return (
    <main className='flex flex-col gap-6 pt-9 px-[76px] w-full'>
      <div>위에 버튼들</div>
      <ul className='grid grid-cols-3 gap-10 w-full'>
        {data.map(post => (
          <li key={post.slug}>
            <VerticalCard
              category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              hearts={6}
              comments={14}
              thumbnail={'/og-image.png'}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPostList;
