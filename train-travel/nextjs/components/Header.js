import Link from 'next/link'

export default function Header(){
    
  return (
    <header className="max-w-screen-lg mx-auto flex flex-wrap">
      <div className="flex flex-wrap">
        <h2>
          Train Travel
        </h2>
      </div>
      <nav className="flex flex-wrap ml-auto divide-x">
        <Link href="/">
          <a className="px-4 my-auto !no-underline">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="px-4 my-auto !no-underline">
            Blogs
          </a>
        </Link>
        <Link href="/about">
          <a className="px-4 my-auto !no-underline">
            About
          </a>
        </Link>
      </nav>
    </header>
  )  
}