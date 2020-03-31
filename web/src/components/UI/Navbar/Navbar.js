import { Link, routes } from '@redwoodjs/router'
import Logo from 'src/assets/logo.png'

const Navbar = (props) => {
  return (
    <nav className="uk-navbar-container uk-margin app-navbar" data-uk-navbar>
      <div className="uk-navbar-center">
        <a className="uk-navbar-item uk-logo" href="#">
          <img src={Logo} alt="Chismografo como en la secundaria" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
