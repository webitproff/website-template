import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

const theDir = join(process.cwd(), 'subpages')

export const getSubPagePaths = () => {
  // ['prolog.md','finale.md']
  return readdirSync(theDir).map(file => file.slice(0, -3))
  //                            ['prolog','finale']
}

export const getSubPage = (path) => { // 'prolog'
  const { data, content } = matter(readFileSync(join(theDir, path +'.md')))
  return { ...data, content, path }
}

export const getAllSubPages = () => {

  return getSubPagePaths().map(path => getSubPage(path))
  // [ { data, content }, { data, content } ]
}