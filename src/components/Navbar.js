import logo from '../assets/img/logo/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/">
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className="navbar-ul">
          <li className='nav-item'>
            <a className='nav-link' href="/">Home</a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
