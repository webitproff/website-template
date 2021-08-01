import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

const theDir = join(process.cwd(), 'markdowns')

export const getPagePaths = () => {
  // ['about.md','faq.md']
  return readdirSync(theDir).map(file => file.slice(0, -3))
  //                         ['about','faq']
}

export const getPage = (path) => { // '1'
  const { content } = matter(readFileSync(join(theDir, path +'.md')))
  return { content, path }
}

export const getAllPages = () => {

  return getPagePaths().map(path => getPage(path))
  // [ { content, path }, { content, path } ]
}