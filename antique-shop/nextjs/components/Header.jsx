import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({  }){
  const { pathname } = useRouter()

  return (
    <header>
      <h2 className="uk-margin-top uk-text-muted uk-text-center">
        Antique Shop
      </h2>
      <ul className="uk-flex-center uk-tab">
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
        <li className={pathname.startsWith('/product') ? 'uk-active' : ''}>
          <Link href="/product">
            <a>
              Product
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
    </header>
  )
}