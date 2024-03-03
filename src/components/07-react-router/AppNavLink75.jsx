import { NavLink, Routes, Route } from 'react-router-dom'
import Posts3 from './Posts3'

const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm border-bottom p-2"
        style={{ backgroundColor: '#eded' }}
      >
        <h3>NavLink v3</h3>
        <ul className="navbar-nav ms-auto">
          <li>
            <NavLink to="/posts/v2" className="nav-link">
              All Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route path="/posts/v2" element={<Posts3 />} />
        </Routes>
      </div>
    </>
  )
}
export default App
