import Link from 'next/link'
import { getAllBlogs } from '../functions'

export default function HomePage({ blogs }){

  return <>
    {blogs.map(({ date, description, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div className="sm:flex" key={index}>
        <div className="flex-1 my-auto">
          <img className="max-w-full max-h-96 mx-auto" src={imageSrc} alt={imageCopy} />
        </div>
        <div className="flex-1 my-auto sm:pl-4">
          <h2>
            {title}
          </h2>
          <p>
            Date: {date}
          </p>
          <p>
            {description}
            <a href={imageLink} target="_blank" className="!no-underline">
              {imageCopy}
            </a>
          </p>
          <p>
            <Link href={`/blog/${path}`}>
              <a className="!no-underline">
                Read more
              </a>
            </Link>
          </p>
        </div>
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