import Button from '../components/Button'
import Card from '../components/Card'

export default function IndexPage({ title, description }){

  return <>
    <div className="sm:flex items-center">
      <div className="flex-1">
        <img className="w-full h-auto" src="/assets/undraw_at_the_park.svg" alt="at the park" />
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-4xl mb-6 font-bold text-green-500">
          {title}
        </h1>
        <p className="text-xl mb-4 font-semibold text-gray-600">
          {description}
        </p>
        <Button href="/#service">
          Service
        </Button>
        <Button href="/#about" invert>
          About
        </Button>
      </div>
    </div>
    <div className="md:flex items-center md:px-4 xl:px-16" id="service">
      <div className="flex-1 m-4">
        <Card 
          title="Service"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque pariatur ipsa eligendi quasi optio."
        />
      </div>
      <div className="flex-1 m-4">
        <Card 
          imageSrc="/assets/undraw_mobile_user.svg"
          imageAlt="mobile user"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil repellendus quod ad. Odit optio possimus necessitatibus quae numquam blanditiis quis quia, quisquam explicabo deserunt."
        >
          <Button href="/#" invert>
            Get
          </Button>
        </Card>
      </div>
      <div className="flex-1 m-4">
        <Card 
          imageSrc="/assets/undraw_drone_delivery.svg"
          imageAlt="drone delivery"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe praesentium, nam debitis eos, tempora id neque illum perspiciatis quisquam deserunt dolorum, possimus necessitatibus perferendis adipisci. Quam eos modi nobis culpa."
        >
          <Button href="/#">
            Get
          </Button>
        </Card>
      </div>
    </div>
    <div className="sm:flex items-center" id="about">
      <div className="flex-1">
        <img className="w-full h-auto" src="/assets/undraw_Fall_is_coming.svg" alt="Fall is coming" />
      </div>
      <div className="flex-1 m-4">
        <Card 
          title="About" 
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis minus omnis nulla, in nam et, unde illo asperiores quibusdam quaerat commodi a quisquam dicta repellat nisi earum assumenda beatae? Praesentium!"
        >
          
        </Card>
      </div>
    </div>
    <div className="sm:flex items-center">
      <div className="flex-1 p-8">
        <h1 className="text-4xl mb-6 font-bold">
          Frequently asked questions
        </h1>
        <p className="text-xl mb-4 font-semibold text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ullam earum atque molestias dolores voluptatem veritatis placeat quibusdam reiciendis laudantium, officia, non nam, eaque mollitia omnis vel magnam commodi sequi?
        </p>
        <Button href="/#" invert>
          See More
        </Button>
      </div>
      <div className="flex-1">
        <img className="w-full h-auto" src="/assets/undraw_deliveries.svg" alt="deliveries" />
      </div>
    </div>
    <footer className="p-8 text-center">
      <p className="font-semibold">
        Copyright @ 
        <a className="text-green-500" href="https://github.com/zummon/website-template" target="_blank">
          zummon
        </a>
      </p>
    </footer>
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