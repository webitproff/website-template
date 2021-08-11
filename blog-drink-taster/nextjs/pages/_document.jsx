import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head />
        <body className="font-serif bg-pink-50 text-pink-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
