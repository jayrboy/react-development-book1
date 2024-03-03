import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    data: 0,
  })

  const increase = () => {
    setState((prev) => {
      return { data: prev.data + 1 }
    })
  }
  function decrease() {
    setState((prev) => {
      return { data: prev.data - 1 }
    })
  }

  return (
    <div className="col-6 mx-auto mt-4">
      <div className="card">
        <div className="card-header text-end">
          <button className="btn btn-sm btn-success" onClick={increase}>
            เพิ่ม
          </button>
          &nbsp;
          <button className="btn btn-sm btn-warning" onClick={decrease}>
            ลด
          </button>
        </div>
        <div className="card-body text-center">Number : {state.data}</div>
      </div>
    </div>
  )
}
export default App
