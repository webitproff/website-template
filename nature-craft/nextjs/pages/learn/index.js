import HeadTag from '../../components/HeadTag'
import MediumHeader from '../../components/MediumHeader'
import LearnCard from '../../components/LearnCard'
import { learns } from './[path]'

export default function LearnPage(){
  
  return <>
    <HeadTag title="Learn" />
    <MediumHeader title="Learn" description="Quos tempora hic molestias!" />
    
    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <div className="uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid="">

          {learns.map((item, index) => (
            <div key={index}>
              <LearnCard {...item} />
            </div>
          ))}

        </div>
      </div>
    </div>
  </>
}