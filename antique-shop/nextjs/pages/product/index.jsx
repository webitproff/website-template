import Product from '../../components/Product'
import data from '../../products.json'

export default function ProductPage({  }){
    
  return <>
    <div className="uk-margin-top uk-margin-bottom">
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-grid="masonry: true">
        {data.map((item, index) => (
          <div key={index}>
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  </>
}

export async function getStaticProps({  }){

  return {
    props: {
      title: "Product"
    }
  }
}