import Link from 'next/link'
import Head from 'next/head'
import { blogHeader } from '../pages/blog'
import { learnHeader } from '../pages/learn'
import { about } from '../pages/index'

export default function Layout({ children, level, image: { copy, link, src }, description, path, title, subtitle }){
  const bundleTitle = (title ? (subtitle ? `${subtitle} - ${title} - ` : `${title} - `) : '') + 'Nature Craft'
  const navs = [
    learnHeader,
    blogHeader,
    about,
  ]

  return <>
    <Head>
      <title>
        {bundleTitle}
      </title>
    </Head>
    <div className={`uk-section uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light uk-background-secondary ${level === 1 ? 'uk-section-large' : ''}`} style={{ backgroundImage: `url(${src})` }}>
      <div className="uk-container uk-container-small">
        {level === 1 ? (
          <div className="uk-flex uk-flex-right">
            <div className="uk-width-2-3">
              <h1 className="uk-heading-medium">
                {bundleTitle}
              </h1>
              <p className="uk-h3 uk-margin-top">
                Lorem ipsum dolor sit amet consectetur.
                <a href={link} target="_blank">
                  {copy}
                </a>
              </p>
              <nav>
                {navs.slice(0,2).map(({ path, title }, index) => (
                  <Link href={`/${path}`} key={`nav-${index}`}>
                    <a className={`uk-button ${index === 0 ? 'uk-button-secondary' : 'uk-button-default'} uk-button-large uk-margin-bottom uk-margin-right`}>
                      {title}
                    </a>
                  </Link>
                ))}
                <hr className="uk-hidden@s" />
                {navs.slice(2).map(({ path, title }, index) => (
                  <Link href={`/${path}`} key={`home-${index}`}>
                    <a className="uk-button uk-button-text uk-button-large uk-margin-bottom uk-margin-right" uk-scroll="">
                      {title}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ) : level === 2 ? (
          <div className="uk-flex-middle uk-grid-divider" uk-grid="">
            <nav className="uk-width-1-3@s">
              <Link href="/">
                <a className="uk-icon-button uk-margin-bottom uk-margin-right" uk-icon="home"></a>
              </Link>
              <hr className="uk-hidden@xl" />
              {navs.map(({ path, title }, index) => (
                <Link href={`/${path}`} key={`nav-${index}`}>
                  <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
                    {title}
                  </a>
                </Link>
              ))}
            </nav>
            <div className="uk-width-2-3@s">
              <h1 className="uk-heading-small">
                {title}
              </h1>
              <p className="uk-h4 uk-margin-top">
                {description}
                <a href={link} target="_blank">
                  {copy}
                </a>
              </p>
            </div>
          </div>
        ) : <>
          <blockquote className="uk-text-right">
            <footer>
              <a className="uk-link-muted" href={link} target="_blank">
                {copy}
              </a>
            </footer>
          </blockquote>
          <nav>
            <Link href={`/${path}`}>
              <a className="uk-icon-button uk-margin-bottom uk-margin-right" uk-icon="reply"></a>
            </Link>
            <Link href="/">
              <a className="uk-icon-button uk-margin-bottom uk-margin-right" uk-icon="home"></a>
            </Link>
            <hr className="uk-hidden@s" />
            {navs.map(({ path, title }, index) => (
              <Link href={`/${path}`} key={`nav-${index}`}>
                <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
                  {title}
                </a>
              </Link>
            ))}
          </nav>
        </>}
      </div>
    </div>
    <div className="uk-section uk-section-muted">
      {children}
    </div>
    <div className="uk-section uk-section-secondary uk-light">
      <div className="uk-container uk-container-small">
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-divider" uk-grid="">
          <div>
            <p>
              <a className="uk-icon-button uk-margin-small-bottom uk-margin-small-right" uk-icon="facebook"></a>
              <a className="uk-icon-button uk-margin-small-bottom uk-margin-small-right" uk-icon="instagram"></a>
              <a className="uk-icon-button uk-margin-small-bottom uk-margin-small-right" uk-icon="pinterest"></a>
              <a className="uk-icon-button uk-margin-small-bottom uk-margin-small-right" uk-icon="twitter"></a>
              <a className="uk-icon-button uk-margin-small-bottom uk-margin-small-right" uk-icon="youtube"></a>
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
  </>
}