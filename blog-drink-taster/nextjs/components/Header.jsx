import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'

export default function Header({  }){

  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">
          <a className="inline-block text-xl font-semibold m-4 p-4 rounded-2xl transition duration-500 ease-in-out hover:text-pink-500 hover:underline">
            Drink Taster
          </a>
        </Link>
      </div>
      <div className="hidden md:block">
        <Link href="/blog">
          <a className="inline-block text-xl font-semibold m-4 p-4 rounded-2xl transition duration-500 ease-in-out hover:text-pink-500 hover:underline">
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-block text-xl font-semibold m-4 p-4 rounded-2xl transition duration-500 ease-in-out hover:text-pink-500 hover:underline">
            About
          </a>
        </Link>
        <Link href="/goal">
          <a className="inline-block text-xl font-semibold m-4 p-4 rounded-2xl transition duration-500 ease-in-out hover:text-pink-500 hover:underline">
            Goal
          </a>
        </Link>
      </div>
      <div className="md:hidden">
        <button className="inline-block text-xl font-semibold m-4 p-4 rounded-2xl transition duration-500 ease-in-out hover:text-pink-500">
          <MenuOutlined />
        </button>
      </div>
    </div>
  )
}