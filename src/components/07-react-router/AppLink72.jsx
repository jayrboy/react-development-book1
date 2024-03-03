import { Link, Routes, Route } from 'react-router-dom'
import Posts from './Posts'

const AppLink72 = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm border-bottom p-2"
        style={{ backgroundColor: '#fee' }}
      >
        <h3>Link</h3>
        <ul className="navbar-nav ms-auto">
          <li>
            <Link to="/posts" className="nav-link">
              All Posts
            </Link>
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
export default AppLink72
