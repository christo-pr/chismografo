import { Link, routes } from '@redwoodjs/router'

const Navbar = (props) => {
  return (
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="uk-navbar-center">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>
      </div>
    </nav>
  )
}

export default Navbar
