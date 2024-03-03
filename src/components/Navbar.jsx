import reactSvg from '../assets/react.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'

function Navbar() {
  const [state, setState] = useState({
    collapse: false,
  })
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <button
        className="navbar-toggler collapsed navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon"
          onClick={() => {
            setState({ collapse: !state.collapse })
            console.log(state.collapse)
          }}
        ></span>
      </button>
      <NavLink className="navbar-brand" to="/">
        <img
          src={reactSvg}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        React
      </NavLink>
      <div
        className={
          state.collapse
            ? 'collapse navbar-collapse show text-center pt-3'
            : 'collapse navbar-collapse'
        }
      >
        <ul className="navbar-nav ms-auto">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.href} className="nav-link">
                  {link.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
