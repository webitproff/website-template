import { getAllBlogs } from '../functions'

export function getStaticProps(){

  return {
    props: {
      blogs: getAllBlogs().slice(0,4)
    }
  }
}

export default function HomePage({ blogs }){

  return <>
    
    <div className="max-w-prose">
      
    </div>

  </>
}