export default function Footer(){

  return (
    <footer className="uk-text-center uk-margin-large-top uk-margin-large-bottom">
      <p className="uk-margin-small">
        Made by :
        <a href="https://github.com/zummon/website-template" target="_blank">
          zummon
        </a>
        . Sources used :
        <a className="uk-link-text" href="https://getuikit.com/" target="_blank">
          UIkit
        </a>
        ,
        <a className="uk-link-text" href="https://unsplash.com/" target="_blank">
          Unsplash
        </a>
      </p>
      <p className="uk-margin-small uk-visible@s uk-link-muted">
        <a href="https://unsplash.com/photos/YSUnEXMVN5k" target="_blank">
          Background Photo by Sergey Sokolov on Unsplash
        </a>
      </p>
    </footer>
  )
}