import remark from 'remark'
import html from 'remark-html'
import { getBlogPaths, getBlog } from '../../functions'

export default function Blog({ contentHtml, date, description, title }){

  return <>
    <div className="max-w-prose mx-auto text-center">
      <h1>
        {title}
      </h1>
      <p>
        Date: {date}
      </p>
      <p>
        {description}
      </p>
    </div>
    <div className="max-w-prose mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
      contentHtml: await remark().use(html).process(content).then(res => res.toString()), 
    } 
  }
}