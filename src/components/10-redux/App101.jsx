import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'

const App = () => {
  return (
    <Provider store={store}>
      <div className="mt-5 text-center">
        <Counter />
      </div>
    </Provider>
  )
}

export default App
