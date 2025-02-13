import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../get-posts'
 
export async function generateMetadata(props: any) {
  const params = await props.params
  return {
    title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`
  }
}
 
export async function generateStaticParams() {
  const allTags = await getTags()

  return allTags.map((tag: string) => ({
    tag: encodeURIComponent(tag),
  }));
}
 
export default async function TagPage(props: any) {
  const params = await props.params
  const { title } = await generateMetadata({ params })
  const posts = await getPosts()
  return (
    <>
      <h1>{title}</h1>
      {posts
        .filter((post: any) =>
          post.frontMatter.tags.includes(decodeURIComponent(params.tag))
        )
        .map((post: any) => (
          <PostCard key={post.route} post={post} />
        ))}
    </>
  )
}