import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

const directory = join(process.cwd(), 'blogs')

export const getBlogPaths = () => (
  readdirSync(directory) // ['1.md','2.md']
  .map(file => file.slice(0, -3)) // ['1','2']
)
export const getBlog = (path) => ( // '1'
  matter(
    readFileSync(
      join(directory, path +'.md')
    )
  ) // { data: { date, title }, content }
)
export const getAllBlogs = () => (
  getBlogPaths().map(path => getBlog(path)) // [ { data, content }, { data, content } ]
)

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