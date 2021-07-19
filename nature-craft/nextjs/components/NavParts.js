import Link from 'next/link'

export default function NavParts({ back }){

  return <>
    {back && (
      <Link href={'/' + back}>
        <a className="uk-icon-button uk-margin-bottom uk-margin-right" uk-icon="reply"></a>
      </Link>
    )}
    <Link href="/">
      <a className="uk-icon-button uk-margin-bottom uk-margin-right" uk-icon="home"></a>
    </Link>
    <Link href="/#about">
      <a className="uk-button uk-button-text uk-margin-bottom uk-margin-right">
        About
      </a>
    </Link>
    <Link href="/#donate">
      <a className="uk-button uk-button-text uk-margin-bottom uk-margin-right">
        Donate
      </a>
    </Link>
    <hr />
    <Link href="/learn">
      <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
        Learn
      </a>
    </Link>
    <Link href="/blog">
      <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
        Blog
      </a>
    </Link>
  </>
}