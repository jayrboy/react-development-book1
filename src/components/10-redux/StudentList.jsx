import { useDispatch, useSelector } from 'react-redux'
import { add, del } from './studentReducer'

const StudentList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.student.students)

  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Henry',
  ]

  const randomName = names[Math.floor(Math.random() * names.length)]

  const handleAdd = () => {
    dispatch(
      add({
        id: Math.floor(Math.random() * 1000),
        name: randomName,
        score: Math.floor(Math.random() * 101),
      })
    )
  }

  const handleDelete = (id) => {
    dispatch(del(id))
  }

  return (
    <div>
      <h1>Student List</h1>
      <button className="btn btn-primary mb-2" onClick={handleAdd}>
        Add
      </button>
      <ul className="list-group mb-2">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} - {item.score}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudentList
