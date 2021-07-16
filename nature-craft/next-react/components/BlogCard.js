import Link from 'next/link'

export default function BlogCard({ date, description, invert, path, title }){

  return (
    <div className={`uk-card ${invert ? 'uk-card-secondary' : 'uk-card-default'}`}>
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom">
          {title}
        </h3>
        <p className="uk-text-meta uk-margin-remove-top">
          <time>
            {date}
          </time>
        </p>
      </div>
      <div className="uk-card-body">
        {description}
      </div>
      <div className="uk-card-footer uk-text-right uk-text-left@m">
        <Link href={`/blog/${path}`}>
          <a className="uk-button uk-button-text">
            Read
          </a>
        </Link>
      </div>
    </div>  
  )  
}