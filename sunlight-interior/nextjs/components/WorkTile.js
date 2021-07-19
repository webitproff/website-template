export default function WorkTile({ image: { copy, link, src }, children, title }){

  return (
    <div className="uk-cover-container uk-height-viewport uk-light">
      <img src={src} alt={copy} uk-cover="" />
      <div className="uk-position-center uk-position-small uk-text-center">
        <h2 className="uk-heading-medium">
          {title}
        </h2>
        {children}
      </div>
      <div className="uk-position-bottom-right uk-position-small">
        <blockquote>
          <footer>
            <a className="uk-link-muted" href={link} target="_blank">
              {copy}
            </a>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}