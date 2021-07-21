import Link from 'next/link'
import { getAllBlogs } from '../../functions'

export default function BlogPage({ blogs }){

  return <>
    {blogs.map(({ date, description, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <></>
    ))}
  </>
}

export function getStaticProps(){

  return {
    props: {
      blogs: getAllBlogs()
    }
  }
}