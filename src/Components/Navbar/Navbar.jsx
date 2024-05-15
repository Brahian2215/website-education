import './Navbar.css'
import nomadapp from '../../assets/nomadapp.png'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src={nomadapp} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>

    </div>
  )
}

export default Navbar
