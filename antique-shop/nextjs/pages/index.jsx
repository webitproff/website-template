import { items } from './shop/[item]'
import Product from '../components/Product'

export default function HomePage(){
  
  return <>
    <div className="uk-container uk-container-small uk-background-muted">
      <div className="uk-column-1-2@s uk-column-divider uk-padding">
        <h1>
          Home
        </h1>
        <p>
          What I do?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
        </p>
      </div>
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-grid="masonry: true">
        {items.slice(0,4).map((item, index) => (
          <div key={index}>
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  </>
}