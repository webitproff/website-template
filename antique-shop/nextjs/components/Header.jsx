import Link from 'next/link'

export default function Header({  }){

  return (
    <div className="uk-container uk-container-small uk-background-muted">
      <hr />
      <ul className="uk-flex-right uk-tab">
        <li>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </li>
        {/* {navs.map((item, index) => ( */}
          <li>
            <Link href={`/about`}>
              <a>
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/faq`}>
              <a>
                faq
              </a>
            </Link>
          </li>
        {/* ))} */}
        <li>
          <Link href="/shop">
            <a>
              Shop
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}