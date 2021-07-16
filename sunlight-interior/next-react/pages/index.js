import Link from 'next/link'

const images = [
  {
    copy: 'Photo by Nugroho Wahyu from Pexels',
    link: 'https://www.pexels.com/photo/brown-wooden-table-with-chair-3097112/',
    src: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sunlight Interior'
  },
  {
    copy: 'Photo by Max Vakhtbovych from Pexels',
    link: 'https://www.pexels.com/photo/contemporary-apartment-with-cozy-sofa-and-minimalist-furniture-6585764/',
    src: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Living Room'
  },
  {
    copy: 'Photo by Dayvison de Oliveira Silva from Pexels',
    link: 'https://www.pexels.com/photo/cozy-living-room-design-with-comfy-sofa-and-creative-lamp-5696287/',
    src: 'https://images.pexels.com/photos/5696287/pexels-photo-5696287.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Bedroom'
  },
]

export default function HomePage(){

  return <>
    <div className="uk-position-relative uk-light" tabIndex="-1" uk-slideshow="animation: fade; autoplay: true; ratio: false; pause-on-hover: false" uk-scrollspy="cls: uk-animation-fade; repeat: true">
      <ul className="uk-slideshow-items uk-height-viewport">
        {images.map(({ copy, link, src, title }, index) => (
          <li key={index}>
            <img src={src} alt={copy} uk-cover="" />
            <div className="uk-position-center-right uk-position-large uk-text-right">
              <h1 className="uk-heading-medium uk-margin-small">
                {title}
              </h1>
              <blockquote className="uk-margin-small">
                <footer>
                  <a className="uk-link-muted" href={link} target="_blank">
                    {copy}
                  </a>
                </footer>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
      <div className="uk-position-top-left uk-position-large">
        <a className="uk-icon-button uk-margin-small-right" uk-icon="facebook" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="instagram" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="pinterest" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="twitter" href="#"></a>
        <a className="uk-icon-button uk-margin-small-right" uk-icon="youtube" href="#"></a>
      </div>
      <nav className="uk-position-bottom-right uk-position-large uk-text-right">
        <Link href="/#about">
          <a className="uk-button uk-button-default uk-button-large uk-margin-small-left uk-width-small">
            About
          </a>
        </Link>
        <Link href="/#my-work">
          <a className="uk-button uk-button-default uk-button-large uk-margin-small-left uk-width-small">
            My Work
          </a>
        </Link>
        <Link href="/#contact">
          <a className="uk-button uk-button-default uk-button-large uk-margin-small-left uk-width-small">
            Contact
          </a>
        </Link>
      </nav>
    </div>

    <div className="uk-grid-match uk-grid-collapse" uk-grid="" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      <div className="uk-width-1-6 uk-width-1-4@s uk-width-2-3@l uk-cover-container uk-height-viewport">
        <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by Lisa from Pexels" uk-cover="" />
      </div>
      <div className="uk-width-5-6 uk-width-3-4@s uk-width-1-3@l" id="about">
        <div className="uk-padding-small uk-margin-auto-vertical">
          <div className="uk-flex uk-flex-wrap uk-flex-bottom">
            <h2 className="uk-heading-medium">
              About
            </h2>
            <blockquote>
              <footer>
                <a className="uk-link-muted" href="https://www.pexels.com/photo/crates-mounted-on-wall-1090638/" target="_blank">
                  Photo by Lisa from Pexels
                </a>
              </footer>
            </blockquote>
          </div>
          <p className="uk-text-large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat mollitia blanditiis nobis ratione rerum culpa nihil enim!
          </p>
        </div>
      </div>

      <div className="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport">
        <img src="https://images.pexels.com/photos/5490909/pexels-photo-5490909.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by Rachel Claire from Pexels" uk-cover="" />
      </div>
      <div className="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l">
        <div className="uk-padding-small uk-margin-auto-vertical">
          <div className="uk-flex uk-flex-wrap uk-flex-bottom">
            <h2 className="uk-heading-medium">
              My Work
            </h2>
            <blockquote>
              <footer>
                <a className="uk-link-muted" href="https://www.pexels.com/photo/interior-details-of-modern-bar-with-wooden-furniture-and-arched-wall-5490909/" target="_blank">
                  Photo by Rachel Claire from Pexels
                </a>
              </footer>
            </blockquote>
          </div>
          <p className="uk-text-large">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nostrum tempora accusamus, accusantium ullam eius!
          </p>
          <Link href="/my-work">
            <a className="uk-button uk-button-secondary uk-button-large">
              More
            </a>
          </Link>
        </div>
      </div>

      <div className="uk-width-1-6 uk-width-1-4@s uk-width-1-3@l uk-cover-container uk-height-viewport">
        <img src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by cottonbro from Pexels" uk-cover="" />
      </div>
      <div className="uk-width-5-6 uk-width-3-4@s uk-width-2-3@l" id="contact">
        <div className="uk-padding-small uk-margin-auto-vertical">
          <div className="uk-flex uk-flex-wrap uk-flex-bottom">
            <h2 className="uk-heading-medium">
              Contact
            </h2>
            <blockquote>
              <footer>
                <a className="uk-link-muted" href="https://www.pexels.com/photo/women-and-men-standing-near-table-3205568/" target="_blank">
                  Photo by cottonbro from Pexels
                </a>
              </footer>
            </blockquote>
          </div>
          <form>
            <label className="uk-display-block uk-margin">
              <span className="uk-h3 uk-margin-small uk-display-block">
                Your e-mail
              </span>
              <input className="uk-input uk-form-large" placeholder="example@mail.com" type="email" />
            </label>
            <label className="uk-display-block uk-margin">
              <span className="uk-h3 uk-margin-small uk-display-block">
                Your name
              </span>
              <input className="uk-input uk-form-large" placeholder="Tanya" type="text" />
            </label>
            <label className="uk-display-block uk-margin">
              <span className="uk-h3 uk-margin-small uk-display-block">
                Your message
              </span>
              <textarea className="uk-textarea uk-form-large uk-resize-vertical" placeholder="I have a small house. How you can help?" rows="5"></textarea>
            </label>
            <button className="uk-button uk-button-secondary uk-button-large">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="uk-section uk-section-large" uk-scrollspy="cls: uk-animation-fade; repeat: true">
      <div className="uk-container">
        <div className="uk-child-width-1-2@s uk-child-width-1-4@l" uk-grid="">
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
            <ul className="uk-list uk-list-hyphen">
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
        <p className="uk-text-center uk-margin-large-top">
          Copyright &copy; zummon
        </p>
      </div>
    </div>
  </>
}