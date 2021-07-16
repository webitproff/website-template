export default function Footer(){

  return (
    <div className="uk-section uk-section-large" uk-scrollspy="cls: uk-animation-fade; repeat: true">
      <div className="uk-container uk-text-center">
        <div className="uk-child-width-1-2@s uk-child-width-1-4@l" uk-grid="">
          <div>
            <h3>
              Source Used
            </h3>
            <ul className="uk-list">
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
              Made by
            </h3>
            <p>
              <a href="https://zummon.page/" target="_blank">
                zummon
              </a>
            </p>
          </div>
          <div>
            <h3>
              List Title
            </h3>
            <ul className="uk-list">
              <li>
                <a href="#">
                  Lorem, ipsum.
                </a>
              </li>
              <li>
                <a href="#">
                  Lorem, ipsum.
                </a>
              </li>
              <li>
                <a href="#">
                  Lorem, ipsum.
                </a>
              </li>
              <li>
                <a href="#">
                  Lorem, ipsum.
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              Title
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta autem odio consectetur commodi, doloremque dolores?
            </p>
          </div>
        </div>
        <p className="uk-margin-large-top">
          Copyright &copy; zummon
        </p>
      </div>
    </div>
  )  
}