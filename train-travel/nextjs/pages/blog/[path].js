import { getBlogPaths, getBlog } from '../../functions'

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
    <div className="max-w-prose" dangerouslySetInnerHTML={{ __html: content }} />
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
export function getStaticProps({ params: { path } }){

  return {
    props: getBlog(path)
  }
}