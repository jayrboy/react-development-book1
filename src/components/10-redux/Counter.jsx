import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterReducer'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-outline-success"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      &nbsp;
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
