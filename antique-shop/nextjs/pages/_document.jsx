import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js"></script>
        </Head>
        <body className="uk-background-cover uk-background-fixed uk-height-viewport" style={{ backgroundImage: 'url(https://source.unsplash.com/YSUnEXMVN5k)' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}