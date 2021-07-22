import Link from 'next/link'
import { getAllBlogs } from '../functions'

export default function HomePage({ blogs }){

  return <>
    <h1>
      Train Travel
    </h1>
  
    {blogs.map(({ date, excerpt, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div key={index}>

      </div>
    ))}
  </>
}

export function getStaticProps(){

  return {
    props: {
      blogs: getAllBlogs().slice(0,4)
    }
  }
}