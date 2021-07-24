import NavParts from './NavParts'

export default function SmallHeader({ back }){

  return (
    <div className="uk-section uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light uk-background-secondary" style={{ backgroundImage: "url(https://images.pexels.com/photos/6207392/pexels-photo-6207392.jpeg?auto=compress&cs=tinysrgb&w=1920)" }}>
      <div className="uk-container uk-container-small">
        <blockquote className="uk-text-right">
          <footer>
            <a className="uk-link-muted" href="https://www.pexels.com/photo/assorted-pine-cones-and-dishware-on-table-during-christmas-holiday-6207392/" target="_blank">
              Photo by Mathias P.R. Reding from Pexels
            </a>
          </footer>
        </blockquote>
        <nav>
          <NavParts back={back} />
        </nav>
      </div>
    </div>
  )
}