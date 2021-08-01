import Products from '../components/Products'

export default function AboutPage({  }){

  return <>
    <div className="uk-column-1-2@m uk-column-divider uk-padding">
      <h1>
        About
      </h1>
      <p>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="facebook" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="instagram" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="pinterest" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="twitter" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="youtube" href="#"></a>
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, recusandae. Vitae voluptates, ad ipsam itaque qui, doloremque, recusandae possimus sunt exercitationem ullam harum temporibus nulla. Praesentium est quasi qui. Dolorum.
      </p> 
      <ul>
        <li>
          Dolorum.
        </li>
        <li>
          Praesentium est quasi qui.
        </li>
      </ul>
    </div>
    <Products start={4} end={8} />
  </>
}

export async function getStaticProps({  }){

  return {
    props: {
      
    }
  }
}