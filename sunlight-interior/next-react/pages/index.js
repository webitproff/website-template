import Link from 'next/link'
import WorkTile from '../components/WorkTile'
import HeadTag from '../components/HeadTag'
import { ourWorks } from './our-work/[path]'

const sliders = [
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
    <HeadTag />

    <header className="uk-position-relative uk-light" tabIndex="-1" uk-slideshow="animation: fade; autoplay: true; ratio: false; pause-on-hover: false" uk-scrollspy="cls: uk-animation-fade; repeat: true">
      <ul className="uk-slideshow-items uk-height-viewport">
        {sliders.map(({ copy, link, src, title }, index) => (
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
          <a className="uk-button uk-button-default uk-button-large uk-margin-small-left uk-text-nowrap">
            About
          </a>
        </Link>
        <Link href="/#our-work">
          <a className="uk-button uk-button-secondary uk-button-large uk-margin-small-left uk-text-nowrap">
            Our Works
          </a>
        </Link>
        <Link href="/#contact">
          <a className="uk-button uk-button-default uk-button-large uk-margin-small-left uk-text-nowrap">
            Contact
          </a>
        </Link>
      </nav>
    </header>

    <div className="uk-grid-match uk-grid-collapse" uk-grid="" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      <div className="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l" id="about">
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
        <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by Lisa from Pexels" uk-cover="" />
      </div>

      {ourWorks.slice(0,2).map(({ image, path }, index) => (
        <div className="uk-width-1-2" id={index === 0 ? 'our-work' : null} key={index}>
          <WorkTile image={image} title={index === 0 ? 'Our' : 'Works'}>
            {index === 0 ? (
              <Link href={`/our-work/${path}`}>
                <a className="uk-button uk-button-secondary uk-button-large uk-margin-small-left">
                  See
                </a>
              </Link>
            ) : (
              <Link href="/our-work">
                <a className="uk-button uk-button-secondary uk-button-large uk-margin-small-left">
                  All
                </a>
              </Link>
            )}
          </WorkTile>
        </div>
      ))}

      <div className="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport">
        <img src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by cottonbro from Pexels" uk-cover="" />
      </div>
      <div className="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l" id="contact">
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
  </>
}