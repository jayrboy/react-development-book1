import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import JSX from './components/JSX'
import Props from './components/Props'
import Styles from './components/Styles'
import State from './components/State'
import Events from './components/Events'
import Routers from './components/Routers'
import Posts from './components/07-react-router/Posts'
import Posts2 from './components/07-react-router/Posts2'
import Posts3 from './components/07-react-router/Posts3'
import LifeCycle from './components/LifeCycle'
import Child2 from './components/08-lifecycle-method/Child2'
import Form from './components/Form'
import Redux from './components/Redux'
import ReactRedux from './components/ReactRedux'
import ReduxApi from './components/ReduxApi'
import Context from './components/Context'

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/state" element={<State />} />
          <Route path="/events" element={<Events />} />
          <Route path="/router" element={<Routers />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Posts2 />} />
          <Route path="/posts/v2" element={<Posts3 />} />
          <Route path="/lifecycle/*" element={<LifeCycle />} />
          <Route path="/child" element={<Child2 />} />
          <Route path="/form" element={<Form />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/react/redux" element={<ReactRedux />} />
          <Route path="/api/redux" element={<ReduxApi />} />
          <Route path="/context" element={<Context />} />
        </Routes>
      </div>
    </>
  )
}
export default App
