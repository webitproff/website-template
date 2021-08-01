import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getPagePaths, getPage } from '../functions'

export default function Page({ contentSource }){

  return <>
    <div className="uk-container uk-container-small uk-background-muted">
      <div className="uk-column-1-2@s uk-column-divider uk-padding">
        <MDXRemote {...contentSource} components={{
          a: (props) => (
            <a target="_blank" {...props}></a>
          ),
          Link: (props) => (
            <Link {...props}></Link>
          )
        }} />
      </div>
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: getPagePaths().map(path => ({ 
      params: { path }
    })),
    fallback: false
  }
}
export async function getStaticProps({ params: { path } }){
  const { content } = getPage(path)

  return {
    props: {
      contentSource: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }),
    }
  }
}