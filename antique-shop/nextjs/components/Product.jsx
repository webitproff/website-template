import Link from 'next/link'

export default function Product({ imageCopy, imageLink, imageSrc, path, title, price }){

  return (
    <Link href={`/product/${path}`}>
      <a className="uk-display-block uk-inline-clip uk-transition-toggle uk-border-rounded uk-box-shadow-medium" tabIndex="0" uk-tooltip={price}>
        <img className="uk-transition-scale-up uk-transition-opaque" src={imageSrc} alt={imageCopy} />
      </a>
    </Link>
  )
}