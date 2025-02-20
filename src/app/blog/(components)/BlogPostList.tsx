import VerticalCard from "@/components/Blog/VerticalCard";

interface Props {
  data: any[];
}

const BlogPostList = ({data}: Props) => {
  return (
    <div className="flex flex-col gap-6 pt-9 px-[76px]">
      <div>위에 버튼들</div>
      <div className="">
        {data.map((post) => (
            <VerticalCard
              key={post.slug}
              category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              hearts={6}
              comments={14}
              thumbnail={'/og-image.png'}
            />
        ))}
      </div>
    </div>
  )
}

export default BlogPostList
