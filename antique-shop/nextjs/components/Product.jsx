import Link from 'next/link'

export default function Product({ imageCopy, imageLink, imageSrc, title, path }){

  return (
    <Link href={`/shop/${path}`}>
      <a className="uk-display-block uk-inline-clip uk-transition-toggle" tabIndex="0">
        <img className="uk-transition-scale-up uk-transition-opaque" src={imageSrc} alt={imageCopy} />
      </a>
    </Link>
  )
}