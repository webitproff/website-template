import Layout from '../../components/Layout'
import LearnCard from '../../components/LearnCard'
import { learns } from './[path]'

export const learnHeader ={ 
  image: {
    copy: 'Photo by Skylar Kang from Pexels',
    link: 'https://www.pexels.com/photo/assorted-pine-cones-and-dishware-on-table-during-christmas-holiday-6207392/',
    src: 'https://images.pexels.com/photos/6207392/pexels-photo-6207392.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  description: 'Quos tempora hic molestias!',
  path: 'learn',
  title: 'Learn',
}

export default function LearnPage(){
  
  return (
    <Layout level={2} {...learnHeader}>
      <div className="uk-container">
        <div className="uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid="">

          {learns.map((item, index) => (
            <div key={index}>
              <LearnCard {...item} />
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
}