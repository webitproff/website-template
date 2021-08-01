import Link from 'next/link'
import productData from '../data/products.json'

export default function Products({ start, end }){
  const data = end && start ? productData.slice(start, end) 
    : end ? productData.slice(0, end) 
    : productData

  return (
    <div className="uk-margin-top uk-margin-bottom">
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-grid="masonry: true">
        {data.map(({ imageCopy, imageLink, imageSrc, path, title, price }, index) => (
          <div key={index}>
            <Link href={`/shop/${path}`}>
              <a className="uk-display-block uk-inline-clip uk-transition-toggle uk-border-rounded uk-box-shadow-medium" tabIndex="0" uk-tooltip={price}>
                <img className="uk-transition-scale-up uk-transition-opaque" src={imageSrc} alt={imageCopy} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}