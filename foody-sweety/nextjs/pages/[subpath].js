import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getSubPagePaths, getSubPage } from '../functions'

export default function SubPage({ excerpt, imageCopy, imageLink, imageSrc, title, contentSl }){
  
  return (
    <div className="bg-gray-900 max-w-screen-md rounded-xl mx-auto my-8 shadow-2xl">
      <p className="text-xl">
        <Link href="/">
          <a className="transition duration-500 ease-in-out hover:bg-gray-50 hover:text-gray-900 px-6 py-4 rounded-tl-xl inline-block font-bold">
            <i className="fas fa-reply"></i>
          </a>
        </Link>
      </p>

      <div className="px-4 sm:px-8">
        <h1 className="text-4xl my-6 text-center">
          {title}
        </h1>
        <p className="text-lg my-4 text-center">
          <img className="max-w-full max-h-96 object-contain mx-auto" src={imageSrc} alt={imageCopy} />
        </p>
        <p className="text-lg my-4 text-center">
          {excerpt} 
          <a href={imageLink} target="_blank">
            {imageCopy}
          </a>
        </p>
      </div>

      <div className="px-4 sm:px-8">
        <MDXRemote {...contentSl} components={{
          a: ({ children, href }) => (
            <a className="font-bold" href={href} target="_blank">
              {children}
            </a>
          ),
          h1: ({ children }) => (
            <h1 className="text-4xl my-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl my-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl my-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl my-6">
              {children}
            </h4>
          ),
          img: ({ src, alt }) => (
            <img className="max-w-full max-h-96 object-contain mx-auto" src={src} alt={alt} />
          ),
          p: ({ children }) => (
            <p className="text-lg my-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">
              {children}
            </strong>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-lg">
              {children}
            </ol>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-lg">
              {children}
            </ul>
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
    paths: getSubPagePaths().map(subpath => (
      { params: { subpath } }
    )),
    fallback: false
  }
}
export async function getStaticProps({ params: { subpath } }){
  const { content, ...others } = getSubPage(subpath)
  
  return {
    props: { 
      ...others, 
      contentSl: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }), 
    } 
  }
}