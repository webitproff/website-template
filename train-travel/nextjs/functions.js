import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

const theDir = join(process.cwd(), 'blogs')

export const getBlogPaths = () => {
  //     ['1.md','2.md']
  return readdirSync(theDir).map(file => file.slice(0, -3))
  //                         ['1','2']
}

export const getBlog = (path) => { // '1'
  const { data, content } = matter(readFileSync(join(theDir, path +'.md')))
  return { ...data, content, path }
}

export const getAllBlogs = () => {

  return getBlogPaths().map(path => getBlog(path))
  // [ { data, content, path }, { data, content, path } ]
}