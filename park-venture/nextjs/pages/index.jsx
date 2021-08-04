import NavButton from '../components/NavButton'
import Card from '../components/Card'

export default function HomePage({ title, description }){

  return <>
    <div className="sm:flex items-center">
      <div className="flex-1">
        <img className="w-full h-auto" src="undraw_at_the_park.svg" />
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-4xl mb-6 font-bold text-green-500">
          {title}
        </h1>
        <p className="text-xl mb-4 font-semibold text-gray-600">
          {description}
        </p>
        <NavButton href="/#service">
          Service
        </NavButton>
        <NavButton href="/#about">
          About
        </NavButton>
      </div>
    </div>
    <div className="md:flex items-center md:px-4 xl:px-16" id="service">
      <Card>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque pariatur ipsa eligendi quasi optio.
      </Card>
      <Card image={{ src: 'undraw_mobile_user.svg', alt: 'mobile user' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil repellendus quod ad. Odit optio possimus necessitatibus quae numquam blanditiis quis quia, quisquam explicabo deserunt.
      </Card>
      <Card image={{ src: 'undraw_drone_delivery.svg', alt: 'drone delivery' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe praesentium, nam debitis eos, tempora id neque illum perspiciatis quisquam deserunt dolorum, possimus necessitatibus perferendis adipisci. Quam eos modi nobis culpa.
      </Card>
    </div>
    <div className="" id="about">
      <Card>

      </Card>
      <img className="w-full h-auto" src="undraw_Fall_is_coming.svg" />
    </div>
    <div className="sm:flex items-center">
      <div className="flex-1 p-8">
        <h1 className="text-4xl mb-6 font-bold text-green-500">
          Frequently asked questions
        </h1>
        <p className="text-xl mb-4 font-semibold text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ullam earum atque molestias dolores voluptatem veritatis placeat quibusdam reiciendis laudantium, officia, non nam, eaque mollitia omnis vel magnam commodi sequi?
        </p>
        <NavButton href="/faq">
          See More
        </NavButton>
      </div>
      <div className="flex-1">
        <img className="w-full h-auto" src="undraw_deliveries.svg" />
      </div>
    </div>
  </>
}

export function getStaticProps({  }){

  return {
    props: {
      title: 'Park Venture',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti et ullam, architecto exercitationem libero illum aperiam est delectus vero a, corrupti cum? Hic nam necessitatibus unde illo! Eum, voluptas.'
    }
  }
}