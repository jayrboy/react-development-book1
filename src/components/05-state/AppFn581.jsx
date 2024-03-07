import { useState } from 'react'

const App = () => {
  const [state, setState] = useState({
    data: 0,
  })
  const increase = (number) => {
    setState((prev) => {
      return { data: prev.data + number }
    })
  }
  const random = Math.round(Math.random() * 10) + 1
  return (
    <div className="col-6 mx-auto mt-4">
      <div className="card">
        <div className="card-header text-end">
          <button
            className="btn btn-sm btn-success"
            onClick={() => increase(random)}
          >
            เพิ่ม {random}
          </button>
        </div>
        <div className="card-body text-center">Random : {state.data}</div>
      </div>
    </div>
  )
}
export default App
