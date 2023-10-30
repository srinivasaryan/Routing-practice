// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <div className="nav-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt=" wave"
          className="wave-size"
        />
        <h1 className="nav-text">Wave</h1>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-text">
          <h1> Home</h1>
        </Link>

        <Link to="/about" className="nav-text">
          <h1>About</h1>
        </Link>

        <Link to="/contact" className="nav-text">
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
