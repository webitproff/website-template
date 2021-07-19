import Link from 'next/link'

export default function LearnCard({ image: { copy, link, src }, description, invert, path, title }){

  return (
    <div className={`uk-card ${invert ? 'uk-card-secondary' : 'uk-card-default'}`}>
      <div className="uk-card-media-top uk-height-medium uk-background-cover" 
        style={{ backgroundImage: `url(${src}) `}}
      ></div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">
          {title}
        </h3>
        <p>
          {description}
          <a href={link} target="_blank">
            {copy}
          </a>
        </p>
        <Link href={`/learn/${path}`}>
          <a className="uk-button uk-button-secondary">
            Learn
          </a>
        </Link>
      </div>
    </div>
  )  
}