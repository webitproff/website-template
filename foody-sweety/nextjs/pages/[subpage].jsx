import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getSubPagePaths, getSubPage } from '../functions'

export default function SubPage({ excerpt, imageCopy, imageLink, imageSrc, title, sourceContent }){
  
  return (
    <div className="bg-gray-900 max-w-screen-md rounded-xl mx-auto my-8 shadow-2xl">
      <p className="text-xl">
        <Link href="/">
          <a className="transition duration-500 ease-in-out hover:bg-gray-50 hover:text-gray-900 px-6 py-4 rounded-tl-xl inline-block font-bold">
            <i className="fas fa-reply"></i>
          </a>
        </Link>
      </p>

      <div className="prose max-w-none px-4 sm:px-8 mb-8 text-center">
        <h1>
          {title}
        </h1>
        <p>
          <img src={imageSrc} alt={imageCopy} />
        </p>
        <p>
          {excerpt} 
          <a href={imageLink} target="_blank">
            {imageCopy}
          </a>
        </p>
      </div>

      <div className="prose max-w-none px-4 sm:px-8 mb-8">
        <MDXRemote {...sourceContent} components={{
          a: ({ children, href }) => (
            <a href={href} target="_blank">
              {children}
            </a>
          ),
          Link: (props) => (
            <Link {...props}></Link>
          ),
        }} />
      </div>

      <p className="text-xl text-right">
        <Link href="/">
          <a className="transition duration-500 ease-in-out hover:bg-gray-50 hover:text-gray-900 px-6 py-4 rounded-br-xl inline-block font-bold">
            <i className="fas fa-share"></i>
          </a>
        </Link>
      </p>
    </div>
  )
}

export function getStaticPaths(){
  
  return {
    paths: getSubPagePaths().map(subpage => (
      { params: { subpage } }
    )),
    fallback: false
  }
}
export async function getStaticProps({ params: { subpage } }){
  const { content, ...others } = getSubPage(subpage)
  
  return {
    props: { 
      ...others, 
      sourceContent: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }), 
    } 
  }
}