import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [dataState, setDataState] = useState({
    counter: 0,
  })

  const plusHandler = () => {
    setDataState({
      counter: dataState.counter + 1,
    })
  }

  const minusHandler = () => {
    setDataState({
      counter: dataState.counter - 1,
    })
  }

  return (
    <div className="col-6 mx-auto mt-4">
      <div className="card text-center">
        <div className="card-header">
          <button className="btn btn-sm btn-success" onClick={plusHandler}>
            เพิ่ม
          </button>
          &nbsp;
          <button className="btn btn-sm btn-warning" onClick={minusHandler}>
            ลด
          </button>
        </div>
        <div className="card-body">
          Counter :&nbsp;
          {dataState.counter}
        </div>
      </div>
    </div>
  )
}
export default App
