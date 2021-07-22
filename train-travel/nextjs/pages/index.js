import Link from 'next/link'
import { getAllBlogs } from '../functions'

export default function HomePage({ blogs }){

  return <>
    <h1 className="text-center">
      Train Travel
    </h1>
    <p className="text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {blogs.map(({ date, excerpt, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div key={index}>
        <img className="w-full object-cover h-48 md:h-56 lg:h-72" src={imageSrc} alt={imageCopy} />
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
    ))}
    </div>
    <hr />
    <div className="text-center">
      <Link href="/blog">
        <a>
          See all blog posts
        </a>
      </Link>
    </div>
  </>
}

export function getStaticProps(){

  return {
    props: {
      blogs: getAllBlogs().slice(0,3)
    }
  }
}