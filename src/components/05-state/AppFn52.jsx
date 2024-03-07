import { useState, useEffect } from 'react'

const App = () => {
  let [state, setState] = useState({
    inputValue: 'Original Value',
  })

  useEffect(() => {
    console.log('State updated:', state.inputValue)
  }, [state])

  const myFunction = () => {
    setState({ inputValue: 'New Updated Value Completed.' })
  }

  return (
    <div className="text-center mt-3">
      <button className="btn btn-primary btn-sm" onClick={myFunction}>
        Click
      </button>
    </div>
  )
}
export default App
