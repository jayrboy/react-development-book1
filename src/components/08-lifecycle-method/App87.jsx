import { useState, useMemo } from 'react'

const App = () => {
  const [status, setStatus] = useState(true)

  const clickMeHandler = () => {
    setStatus(false)
  }

  const checkCondition = () => {
    return status
  }

  const conditionResult = useMemo(() => checkCondition(), [status])

  const showHide = () => {
    return conditionResult ? <div>Show</div> : <div>Hide</div>
  }

  return (
    <div className="container border rounded-1 p-2">
      <button className="btn btn-outline-info" onClick={clickMeHandler}>
        Change State
      </button>
      <hr />
      {showHide()}
    </div>
  )
}

export default App
