import { getPostDetail, getPostList } from '@/utils/blog/getPostList';
import PostBody from './(components)/PostBody';
import VerticalCard from '@/components/Blog/PostCard/VerticalCard';
import HorizonCard from '@/components/Blog/PostCard/HorizonCard';

export async function generateStaticParams() {
  const allPost = await getPostList();

  return allPost.map(post => ({
    category: post.category,
    slug: post.slug,
  }));
}

const PostDetailPage = async ({ params }: { params: { category: string; slug: string } }) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);

  const allPost = await getPostList();
  let randomInt1;
  let randomInt2;
  while (true) {
    randomInt1 = Math.floor(Math.random() * allPost.length);
    if (slug !== allPost[randomInt1].slug) break;
  }
  while (true) {
    randomInt2 = Math.floor(Math.random() * allPost.length);
    if (randomInt1 !== randomInt2 && slug !== allPost[randomInt2].slug) break;
  }

  if (!post) {
    return <div>Not Found</div>;
  }
  return (
    <div className='max-w-[1056px] mx-auto px-14'>
      <h1>Category: {params.category}</h1>
      <h2>Slug: {params.slug}</h2>
      <PostBody content={post.content} />

      <section className='flex flex-col gap-6 cp_mobile:gap-4'>
        <p className='text-gdsc-Grey-900 text-24'>추천 게시물</p>
        {/* pc ver. */}
        <div className='grid grid-cols-2 gap-8 w-full cp_mobile:hidden'>
          <VerticalCard
            thumbnail={
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
            }
            title={allPost[randomInt1].title}
            author={allPost[randomInt1].author}
            category={allPost[randomInt1].category}
            comments={0}
            date={allPost[randomInt1].date}
            hearts={0}
            href={`/blog/detail/${allPost[randomInt1].category}/${allPost[randomInt1].slug}`}
          />
          <VerticalCard
            thumbnail={
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
            }
            title={allPost[randomInt2].title}
            author={allPost[randomInt2].author}
            category={allPost[randomInt2].category}
            comments={0}
            date={allPost[randomInt2].date}
            hearts={0}
            href={`/blog/detail/${allPost[randomInt2].category}/${allPost[randomInt2].slug}`}
          />
        </div>

        {/* mobile ver. */}
        <div className='hidden cp_mobile:flex flex-col gap-4'>
          <HorizonCard
            thumbnail={
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
            }
            title={allPost[randomInt1].title}
            author={allPost[randomInt1].author}
            category={allPost[randomInt1].category}
            comments={0}
            date={allPost[randomInt1].date}
            hearts={0}
            href={`/blog/detail/${allPost[randomInt1].category}/${allPost[randomInt1].slug}`}
          />
          <HorizonCard
            thumbnail={
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-nkpZ6mzVDnmyfZkwRMRnrl2sUNxpX23a73sX6ZjEF82YVog7XZfu-k4TqGl3fQLMZRCe_AoWs5HPo__ktt4Ei_I8K-_wwftNhwNxbw'
            }
            title={allPost[randomInt2].title}
            author={allPost[randomInt2].author}
            category={allPost[randomInt2].category}
            comments={0}
            date={allPost[randomInt2].date}
            hearts={0}
            href={`/blog/detail/${allPost[randomInt2].category}/${allPost[randomInt2].slug}`}
          />
        </div>
      </section>
    </div>
  );
};

export default PostDetailPage;
