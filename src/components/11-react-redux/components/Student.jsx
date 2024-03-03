import { useDispatch } from 'react-redux'
import { deletedStudent } from '../reducers/studentSlice'
import { Link } from 'react-router-dom'

function Student({ id, name, score }) {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="card-header">
        name: {name}
        <button
          className="btn btn-outline-danger btn-sm float-end mx-1"
          onClick={() => dispatch(deletedStudent(id))}
        >
          ลบ
        </button>
      </div>
      <div className="card-body">score: {score}</div>
    </div>
  )
}

export default Student
