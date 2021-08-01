import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({  }){
  const { pathname } = useRouter()

  return (
    <ul className="uk-flex-right uk-tab uk-margin-small-top">
      <li className={pathname === '/' ? 'uk-active' : ''}>
        <Link href="/">
          <a>
            Home
          </a>
        </Link>
      </li>
      <li className={pathname === '/about' ? 'uk-active' : ''}>
        <Link href="/about">
          <a>
            About
          </a>
        </Link>
      </li>
      <li className={pathname.startsWith('/shop') ? 'uk-active' : ''}>
        <Link href="/shop">
          <a>
            Shop
          </a>
        </Link>
      </li>
      <li className={pathname === '/faq' ? 'uk-active' : ''}>
        <Link href="/faq">
          <a>
            FAQ
          </a>
        </Link>
      </li>
    </ul>
  )
}