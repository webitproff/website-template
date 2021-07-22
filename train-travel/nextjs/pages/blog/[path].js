import remark from 'remark'
import html from 'remark-html'
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
  const { content, title, ...others } = getBlog(path)

  return {
    props: { 
      ...others, 
      contentHtml: await remark().use(html).process(content).then(res => res.toString()), 
      title: title +' - Blog'
    } 
  }
}