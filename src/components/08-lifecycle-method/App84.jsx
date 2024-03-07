import { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState('First')

  // Mimic componentDidUpdate using useEffect hook
  useEffect(() => {
    console.log(`State before change: ${name}`)
  }, [name]) // Trigger useEffect whenever 'name' changes

  const userClick = () => {
    setName('Second')
  }

  // Render the component
  return (
    <div className="container border rounded-1 p-3">
      <button className="btn btn-outline-success" onClick={userClick}>
        Click
      </button>
      <h4>Hello!, Life Cycle!!! {name}</h4>
    </div>
  )
}

export default App
