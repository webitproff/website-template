import Link from 'next/link'

export default function Header({ title }){
    
  return (
    <header className="max-w-screen-lg mx-auto flex flex-wrap mb-8">
      <div className="flex flex-wrap">
        <h2>
          {title && 'Train Travel'}
          {/* <span className="pl-4">
            plan to have darkmode
            <i className="fas fa-moon  inline dark:hidden" />
            <i className="fas fa-sun  hidden dark:inline" />
          </span> */}
        </h2>
      </div>
      <nav className="flex flex-wrap ml-auto divide-x divide-gray-200">
        <Link href="/">
          <a className="px-4 my-auto !no-underline">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="px-4 my-auto !no-underline">
            Blog
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