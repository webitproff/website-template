import Products from '../components/Products'

export default function IndexPage({  }){
  
  return <>
    <div className="uk-column-1-2@m uk-column-divider uk-padding">
      <h1>
        Home
      </h1>
      <p>
        Lorem, ipsum dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
      </p>
      <ul>
        <li>
          Dolorum.
        </li>
        <li>
          Praesentium est quasi qui.
        </li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero alias beatae praesentium debitis laborum hic consequatur magni esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam. Minus, eius.
      </p>
    </div>
    <Products end={4} />
  </>
}

export async function getStaticProps({  }){

  return {
    props: {
      
    }
  }
}