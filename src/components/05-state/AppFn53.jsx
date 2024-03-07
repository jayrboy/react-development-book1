import { useState, useEffect } from 'react'

const App = () => {
  let [state, setState] = useState({
    value: 1,
  })

  useEffect(() => {
    console.log(state.value)
  }, [state])

  const increase = () => {
    setState((prevState) => {
      return { value: prevState.value + 1 }
    })
  }

  return (
    <div className="text-center mt-3">
      <input
        className="btn btn-outline-success btn-sm"
        type="button"
        onClick={increase}
        value="INCREASE"
      />
      &nbsp; : &nbsp;
      {state.value}
    </div>
  )
}
export default App
