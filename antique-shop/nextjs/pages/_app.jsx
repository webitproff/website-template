import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }){
  const { title } = pageProps
  
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js"></script>
      <title>
        {title ? title +' - ' : ''}Antique Shop
      </title>
    </Head>
    <div className="uk-padding uk-visible@s"></div>
    <div className="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    <div className="uk-padding uk-visible@s"></div>
  </>
}