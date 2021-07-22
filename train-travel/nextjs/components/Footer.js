export default function Footer(){

  return (
    <footer className="max-w-screen-lg mx-auto flex flex-wrap mt-8">
      <nav className="flex flex-wrap divide-x">
        <a className="px-4 my-auto !no-underline" href="https://github.com/zummon/website-template" target="_blank">
          zummon
        </a>
        <a className="px-4 my-auto !no-underline" href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>
        <a className="px-4 my-auto !no-underline" href="https://www.pexels.com/" target="_blank">
          Pexels
        </a>
        <a className="px-4 my-auto !no-underline" href="https://fontawesome.com/" target="_blank">
          Font Awesome
        </a>
      </nav>
      <div className="ml-auto">
        <h2 className="flex flex-wrap space-x-4">
          <a className="!no-underline" href="#">
            <i className="fab fa-facebook" />
          </a>
          <a className="!no-underline" href="#">
            <i className="fab fa-github" />
          </a>
          <a className="!no-underline" href="#">
            <i className="fab fa-twitter" />
          </a>
          <a className="!no-underline" href="#">
            <i className="fab fa-youtube" />
          </a>
        </h2>
      </div>
    </footer>
  )
}