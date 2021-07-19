import NavParts from './NavParts'

export default function MediumHeader({ title, description }){

  return (
    <div className="uk-section uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light uk-background-secondary" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5483826/pexels-photo-5483826.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
      <div className="uk-container uk-container-small">
        <div className="uk-flex-middle uk-grid-divider" uk-grid="">
          <nav className="uk-width-1-3@s">
            <NavParts />
          </nav>
          <div className="uk-width-2-3@s">
            <h1 className="uk-heading-small">
              {title}
            </h1>
            <p className="uk-h4 uk-margin-top">
              {description}
              <a href="https://www.pexels.com/photo/decorative-cage-with-pine-cones-5483826/" target="_blank">
                Photo by Skylar Kang from Pexels
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}