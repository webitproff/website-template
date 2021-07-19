export default function Footer(){
  return (
    <div className="uk-section uk-section-secondary uk-light">
      <div className="uk-container uk-container-small">
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-divider" uk-grid="">
          <div>
            <p>
              <a href="#" uk-icon="facebook" className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"></a>
              <a href="#" uk-icon="instagram" className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"></a>
              <a href="#" uk-icon="pinterest" className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"></a>
              <a href="#" uk-icon="twitter" className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"></a>
              <a href="#" uk-icon="youtube" className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"></a>
            </p>
          </div>
          <div>
            <h3>
              Source Used
            </h3>
            <ul className="uk-list uk-list-hyphen">
              <li>
                <a href="https://getuikit.com/" target="_blank">
                  UIkit
                </a>
              </li>
              <li>
                <a href="https://www.pexels.com/" target="_blank">
                  Pexels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              Title
            </h3>
            <ul className="uk-list uk-list-hyphen">
              <li>
                Made by
                <a href="https://zummon.page/" target="_blank">
                  zummon
                </a>
              </li>
              <li>
                <a>
                  Lorem, ipsum.
                </a>
              </li>
              <li>
                <a>
                  Lorem, ipsum.
                </a>
              </li>
              <li>
                <a>
                  Lorem, ipsum.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
  )  
}