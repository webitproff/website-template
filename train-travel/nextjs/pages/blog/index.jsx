import Link from 'next/link'
import { getAllBlogs } from '../../functions'

export default function BlogPage({ blogs }){

  return <>
    {blogs.map(({ date, excerpt, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div className="sm:flex" key={index}>
        <div className="flex-1 my-auto">
          <img className="w-full object-cover h-56 sm:h-72 md:h-96" src={imageSrc} alt={imageCopy} />
        </div>
        <div className="flex-1 my-auto sm:pl-4">
          <h2>
            {title}
          </h2>
          <blockquote>
            {date}
          </blockquote>
          <p>
            {excerpt}
            <a href={imageLink} target="_blank" className="!no-underline">
              {imageCopy}
            </a>
          </p>
          <p>
            <Link href={`/blog/${path}`}>
              <a>
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
      blogs: getAllBlogs(),
      title: 'Blog'
    }
  }
}