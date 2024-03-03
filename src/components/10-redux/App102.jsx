import { Provider } from 'react-redux'
import store from './store'
import StudentList from './StudentList'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <StudentList />
      </div>
    </Provider>
  )
}

export default App
