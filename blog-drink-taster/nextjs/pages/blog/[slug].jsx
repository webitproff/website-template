import MdxElem from '../../components/MdxElem'
import Seo from '../../components/Seo'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getContentPaths, getContent } from '../../getContent'

export default function BlogSlugPage({ date, description, image, title, sourceContent }){

  return <>
    <Seo title={title} description={description} image={image} date={date} />
    <div className="">
      <Image src={image.src} width={image.width} height={image.height} />
    </div>
    <div className="prose">
      <MDXRemote {...sourceContent} components={MdxElem} />
    </div> 
  </>
}

export async function getStaticProps({ params: { slug } }){
  const { content, ...data } = getContent(slug, 'blog')

  return {
    props: {
      ...data, 
      sourceContent: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }),
    },
  }
}

export function getStaticPaths(){
  
  return {
    paths: getContentPaths('blog').map(slug => ({ params: { slug } })),
    fallback: false
  }
}