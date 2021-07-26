import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getBlogPaths, getBlog } from '../../functions'

export default function Blog({ contentHtml, date, excerpt, imageCopy, imageLink, imageSrc, title }){

  return <>
    <div className="max-w-prose mx-auto">
      <p>
        <img className="w-full object-cover h-96" src={imageSrc} alt={imageCopy} />
      </p>
      <h1>{title}</h1>
      <p>
        <b>Date</b> {date}
      </p>
      <p>
        {excerpt}
        <a href={imageLink} target="_blank">
          {imageCopy}
        </a>
      </p>
      <hr />
    </div>
    <div className="max-w-prose mx-auto">
      <MDXRemote {...contentHtml} components={{
        a: (props) => (
          <a target="_blank" {...props}></a>
        ),
        Link: (props) => (
          <Link {...props}></Link>
        )
      }} />
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: getBlogPaths().map(path => (
      { params: { path } }
    )),
    fallback: false
  }
}
export async function getStaticProps({ params: { path } }){
  const { content, ...others } = getBlog(path)

  return {
    props: { 
      ...others, 
      contentHtml: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }), 
    } 
  }
}