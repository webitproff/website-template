import Products from '../../components/Products'

export default function ShopPage({  }){
    
  return <>
    <Products />
  </>
}

export async function getStaticProps({  }){

  return {
    props: {
      title: "Shop"
    }
  }
}