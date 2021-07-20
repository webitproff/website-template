import remark from 'remark'
import html from 'remark-html'

export function getStaticPaths(){
  
  return {
    paths: getBlogPaths().map(path => (
      { params: { path } }
    )),
    fallback: false
  }
}
export function getStaticProps({ params: { path } }){
  const { data, content } = getBlog(path)

  return {
    props: {
      content: remark().use(html).process(content).toString(),
      ...data, // { date, title }
      path
    }
  }
}

export default function Blog({ content, date, description, title }){

  return <>
    <div className="max-w-prose text-center">
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
    <div className="max-w-prose" dangerouslySetInnerHTML={{ __html: content }}>
      {markdown}
    </div>
  </>
}