import Link from 'next/link'

export default function NavButton({ children, href }){

  return (
    <Link href={href}>
      <a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500  hover:ring-2 ring-green-500">
        {children}
      </a>
    </Link>
  )
}