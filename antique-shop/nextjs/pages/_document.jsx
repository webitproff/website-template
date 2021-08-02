import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head />
        <body className="uk-background-cover uk-background-fixed uk-height-viewport" style={{ backgroundImage: 'url(https://source.unsplash.com/YSUnEXMVN5k)' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}