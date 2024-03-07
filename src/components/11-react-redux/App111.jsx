import { Provider } from 'react-redux'
import store from './store'

import StudentLists from './components/StudentLists'

const App = () => {
  return (
    <Provider store={store}>
      <div className="mt-5 text-center">
        <StudentLists />
      </div>
    </Provider>
  )
}

export default App
