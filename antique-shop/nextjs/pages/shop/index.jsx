import Product from '../../components/Product'
import { items } from './[item]'

export default function ShopPage(){
    
  return <>
    <div className="uk-container uk-container-small uk-background-muted">
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small uk-margin-top uk-margin-bottom" uk-grid="masonry: true">
        {items.map((item, index) => (
          <div key={index}>
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  </>
}