import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head />
        <body className="uk-background-fixed uk-height-viewport" 
          style={{ backgroundImage: 'url(https://source.unsplash.com/YSUnEXMVN5k)' }}
        >
          <p className="uk-margin-small uk-text-right uk-link-text">
            <a href="https://unsplash.com/photos/YSUnEXMVN5k" target="_blank">
              Photo by Sergey Sokolov on Unsplash
            </a>
          </p>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}