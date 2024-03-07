import { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState('Jakkrit')

  useEffect(() => {
    console.log('Component Did Mount!!!!')

    return () => {
      console.log('Component Will Unmount!!!!')
    }
  }, [])

  useEffect(() => {
    console.log('Component Did Update!!!!')
  }, [name])

  console.log('Component Render')

  const userClick = () => {
    setName('Saovalak')
  }

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
