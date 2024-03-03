import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [stateArr, setStateArr] = useState({
    home: '#home',
    products: '#products',
    profile: '#profile',
  })

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mt-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          <img
            src="./vite.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          &nbsp;Bootstrap
        </NavLink>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-item nav-link" to={stateArr.home}>
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to={stateArr.products}>
            products
          </NavLink>
          <NavLink className="nav-item nav-link" to={stateArr.profile}>
            profile
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
