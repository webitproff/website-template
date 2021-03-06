import Link from 'next/link'
import { getAllSubPages } from '../functions'

export function getStaticProps(){

  return {
    props: {
      subpages: getAllSubPages(),
    }
  }
}

export default function HomePage({ subpages }){

  return <>
    {subpages.map(({ excerpt, imageCopy, imageLink, imageSrc, title, path }, index) => (
      <div className="bg-gray-900 max-w-screen-md rounded-xl mx-auto my-8 shadow-2xl sm:flex flex-wrap" key={index}>
        <div className="flex-1">
          <img className="min-h-full w-full h-56 sm:h-72 md:h-96  object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" src={imageSrc} alt={imageCopy} />
        </div>
        <div className="flex-1 grid grid-cols-1">
          <h1 className="text-4xl p-4 sm:p-8">
            {title}
          </h1>
          <p className="p-4 sm:p-8 leading-8">
            {excerpt}
            <a href={imageLink} target="_blank">
              {imageCopy}
            </a>
          </p>
          <p className="text-xl text-right mt-auto">
            <Link href={`/${path}`}>
              <a className="transition duration-500 ease-in-out hover:bg-gray-50 hover:text-gray-900 px-6 py-4 rounded-br-xl inline-block font-bold">
                <i className="fas fa-share"></i>
              </a>
            </Link>
          </p>
        </div>
      </div>
    ))}
  </>
}