import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }){

  return <>
    <div className="uk-padding uk-visible@s"></div>
    <div className="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    <div className="uk-padding uk-visible@s"></div>
  </>
}