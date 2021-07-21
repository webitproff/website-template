import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

const directory = join(process.cwd(), 'blogs')

export const getBlogPaths = () => {

  return readdirSync(directory) // ['1.md','2.md']
    .map(file => file.slice(0, -3)) // ['1','2']
}

export const getBlog = (path) => { // '1'
  const { data, content } = matter(
    readFileSync(
      join(directory, path +'.md')
    )
  )
  return { ...data, content, path }
}

export const getAllBlogs = () => {

  return getBlogPaths().map(path => getBlog(path))
  // [ { data, content }, { data, content } ]
}