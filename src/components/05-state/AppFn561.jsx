import { useState } from 'react'

const App = () => {
  const [state, setState] = useState({
    data: 0,
  })

  const increase = () => {
    setState((prev) => {
      return { data: prev.data + 1 }
    })
  }

  return (
    <div className="col-8 col-sm-6 mx-auto mt-4">
      <div className="card text-center">
        <div className="card-header">
          <button className="btn btn-outline-success" onClick={increase}>
            Click Function Component
          </button>
        </div>
        <div className="card-body">Current : {state.data}</div>
      </div>
    </div>
  )
}
export default App
