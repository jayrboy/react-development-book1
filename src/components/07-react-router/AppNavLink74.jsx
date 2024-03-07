import { NavLink, Routes, Route } from 'react-router-dom'
import Posts2 from './Posts2'

const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm border-bottom p-2"
        style={{ backgroundColor: '#cfe' }}
      >
        <h3>NavLink /:id</h3>
        <ul className="navbar-nav ms-auto">
          <li>
            <NavLink to="/posts/1" className="nav-link">
              คนแรก
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts/2" className="nav-link">
              คนที่สอง
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route path="/posts/:id" element={<Posts2 />} />
        </Routes>
      </div>
    </>
  )
}
export default App
