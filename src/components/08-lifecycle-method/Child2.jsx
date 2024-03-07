import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Child = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: 'First',
    status: true,
  })

  useEffect(() => {
    console.log('Component Did Mount!!!!')
    return () => {
      console.log('Component Will Unmount!!!!')
    }
  }, [])

  useEffect(() => {
    console.log('Component Did Update!!!!')
  })

  const userClick = () => {
    setState({
      name: 'Second',
      status: false,
    })
  }

  return (
    <div>
      <div className="container border rounded-1 mt-5 p-2">
        Hello This is the Child!!!
        <button className="btn btn-outline-success" onClick={userClick}>
          Change State
        </button>
        &nbsp;:&nbsp;
        {state.name}
      </div>
      <div className="text-center mt-3">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navigate('/lifecycle')}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Child
