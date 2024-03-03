import { useState, useEffect } from 'react'

const Child = (props) => {
  const [state, setState] = useState({
    name: 'Jakkrit',
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
      name: 'Jakkrit',
      status: false,
    })
  }

  return (
    <div>
      <button className="btn btn-outline-primary" onClick={userClick}>
        State Change!!!
      </button>
      &nbsp;
      <button className="btn btn-outline-success" onClick={props.counterFn}>
        Props Change!!!
      </button>
    </div>
  )
}

export default Child
