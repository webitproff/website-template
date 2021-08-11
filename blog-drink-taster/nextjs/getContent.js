import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

export const getContent = (file, folder) => {
  const { data, content } = matter(readFileSync(join(process.cwd(), 'contents', folder || '', file +'.md')))
  const { date } = data
  return { ...data, date: String(date), content, file }
}

export const getContentPaths = (folder) => {
  return readdirSync(join(process.cwd(), 'contents', folder || '')).filter(file => file.includes('.')).map(file => file.slice(0, -3))
}

export const getAllContents = (folder) => {
  return getContentPaths(folder).map(file => getContent(file, folder))
}