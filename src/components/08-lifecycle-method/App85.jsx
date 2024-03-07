import { useState } from 'react'
import Child from './Child'

const App = () => {
  const [counter, setCounter] = useState(1)

  const plusCounter = () => {
    console.log(counter)
    setCounter(counter + 1)
  }

  // Render the component
  return (
    <div className="container border rounded-1 p-2 text-center">
      <Child counterFn={plusCounter} />
    </div>
  )
}

export default App
