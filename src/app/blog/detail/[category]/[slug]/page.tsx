import { getPostDetail, getPostList } from '@/utils/blog/getPostList';
import path from 'path';
import DetailPageComment from '@/components/Blog/detail/DetailPageComment';
import DetailPageCommentList from '@/components/Blog/detail/DetailPageCommentList';
import DetailPageHeader from '@/components/Blog/detail/DetailPageHeader';
import DetailPageContents from '@/components/Blog/detail/DetailPageContents';

export interface CommentType {
  id: string;
  author: string;
  content: string;
  date: string;
  profileImage: string;
}

const DUMMYCOMMENT: CommentType[] = [
  {
    id: '1',
    author: '닉네임123',
    content:
      '2024년 활동기록에서 1기의 열정과 팀워크가 가득 느껴져요! 프로젝트마다 쌓인 노력이 앞으로 큰 자산이 될 것 같네요. 한 해 수고 많았고, 내년엔 더욱 멋진 도전을 기대합니다!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '2',
    author: '닉네임234',
    content:
      '1기의 활동 기록을 보니 저희 팀을 내년은 설렘과 함께 서로 성장하니깐 관점이 생생히 떠오르네요. 작은 설패도 큰 발받이 된 것 같아 뿌듯합니다! 내년엔 더 많은 성취 기대할게요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '3',
    author: '닉네임567',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '4',
    author: '닉네임567',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '5',
    author: '닉네임567',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '6',
    author: '닉네임6',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '7',
    author: '닉네임7',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '8',
    author: '닉네임8',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
  {
    id: '9',
    author: '닉네임9',
    content:
      '올해 다양한 프로젝트를 함께 진행하며 쌓은 경험과 에너지가 오래 기억에 남을 것 같습니다. 팀원 간 끈끈한 호흡이 진정한 성공 요인이었죠. 2025년에도 더 높은 목표에 도전해요!',
    date: '2024.12.25',
    profileImage: '/gdg_sg_logo.png',
  },
];

export async function generateStaticParams() {
  const allPost = await getPostList();

  return allPost.map(post => ({
    category: post.category,
    slug: post.slug,
  }));
}
const POSTS_PATH = path.join(process.cwd(), '/src/posts');
console.log(POSTS_PATH);
const PostDetailPage = async ({ params }: { params: { category: string; slug: string } }) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);

  if (!post) {
    return <div>Not Found</div>;
  }
  return (
    <div className='flex w-full justify-center'>
      <section className='w-[1000px] flex p-[56px] flex-col gap-[64px]'>
        <DetailPageHeader post={post} />
        <DetailPageContents post={post} />
        <DetailPageComment />
        <DetailPageCommentList comments={DUMMYCOMMENT} />
      </section>
    </div>
  );
};

export default PostDetailPage;
