import data from '../../data/products.json'

export default function ShopProductPage({ description, imageCopy, imageLink, imageSrc, price, title }){
  
  return <>
    <div className="uk-padding">
      <div className="uk-flex uk-flex-wrap">
        <div>
          <h1>
            {title}
          </h1>
          <p className="uk-heading-bullet">
            {description}
          </p>
        </div>
        <div className="uk-margin-auto-left uk-text-center">
          <a className="uk-button uk-button-primary uk-text-large uk-border-rounded uk-box-shadow-medium">
            Purchese
            <hr className="uk-margin-remove" />
            {price}
          </a>
        </div>
      </div>
      <img className="uk-align-center uk-border-rounded uk-box-shadow-medium" src={imageSrc} alt={imageCopy} />
      <p className="uk-text-center">
        <a href={imageLink} target="_blank">
          {imageCopy}
        </a>
      </p>
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: data.map(({ path }) => ({ 
      params: { product: path }
    })),
    fallback: false
  }
}
export async function getStaticProps({ params }){

  return {
    props: {
      ...data.find(({ path }) => path === params.product)
    }
  }
}