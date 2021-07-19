import Link from 'next/link'
import { getAllBlogs } from './[path]'

export default function BlogPage(){

  return <>

    {getAllBlogs().map(({ date, description, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div className="flex" key={index}>
        <div className="flex-1 px-4">
          <img className="max-w-full" src={imageSrc} alt={imageCopy} />
          <p>
            <a href={imageLink} target="_blank">
              {imageCopy}
            </a>
          </p>
        </div>
        <div className="flex-1 px-4">
          <h2>
            {title}
          </h2>
          <p>
            Date: {date}
          </p>
          <p>
            {description}
          </p>
          <Link href={`/blog/${path}`}>
            <a>
              Read
            </a>
          </Link>
        </div>
      </div>
    ))}

  </>
}