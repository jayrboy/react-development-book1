import { Routes, Route, Link } from 'react-router-dom'
import Child from './Child'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/child">Child</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/child" element={<Child />} />
      </Routes>
    </div>
  )
}
export default App
