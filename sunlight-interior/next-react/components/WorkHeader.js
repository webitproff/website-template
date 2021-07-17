import Link from 'next/link'

export default function WorkHeader({ back }){

  return (
    <header className="uk-section uk-section-secondary" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      <nav className="uk-container uk-text-center">
        {back && (
          <Link href="/our-work">
            <a className="uk-button uk-button-link uk-text-large uk-margin-bottom uk-margin-right" uk-icon="icon: reply; ratio: 2"></a>
          </Link>
        )}
        <Link href="/">
          <a className="uk-button uk-button-link uk-text-large uk-margin-bottom uk-margin-right" uk-icon="icon: home; ratio: 2"></a>
        </Link>
        <Link href="/#about">
          <a className="uk-button uk-button-link uk-text-large uk-margin-bottom uk-margin-right">
            About
          </a>
        </Link>
        <Link href="/#contact">
          <a className="uk-button uk-button-link uk-text-large uk-margin-bottom uk-margin-right">
            Contact
          </a>
        </Link>
      </nav>
    </header>
  )
}