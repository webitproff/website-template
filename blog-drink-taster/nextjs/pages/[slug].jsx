import Image from 'next/image'
import MdxElem from '../components/MdxElem'
import Seo from '../components/Seo'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getContentPaths, getContent } from '../getContent'

export default function SlugPage({ description, image, title, sourceContent }){

  return <>
    <Seo title={title} description={description} image={image} />
    {image && (
      <div className="">
        <Image src={image.src} width={image.width} height={image.height} />
      </div>
    )}
    <div className="">
      <MDXRemote {...sourceContent} components={MdxElem} />
    </div>
  </>
}

export async function getStaticProps({ params: { slug } }){
  const { content, ...data } = getContent(slug)

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
    paths: getContentPaths().map(slug => ({ params: { slug } })),
    fallback: false
  }
}