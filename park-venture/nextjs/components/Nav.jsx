import NavButton from './NavButton'

export default function Nav({  }){

  return (
    <nav className="sm:flex">
      <div>
        <NavButton href="/about">
          About
        </NavButton>
      </div>
      <div>
        <NavButton href="/service">
          Service
        </NavButton>
      </div>
      <div>
        <NavButton href="/faq">
          FAQ
        </NavButton>
      </div>
    </nav>  
  )
}