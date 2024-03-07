import { NavLink, Routes, Route } from 'react-router-dom'
import Posts from './Posts'

const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm border-bottom p-2"
        style={{ backgroundColor: '#ceff' }}
      >
        <h3>NavLink</h3>
        <ul className="navbar-nav ms-auto">
          <li>
            <NavLink to="/posts" className="nav-link">
              All Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </>
  )
}
export default App
