import { useState } from 'react'
import Student from './Student'

const StudentLists = () => {
  const [studentsState, setStudentsState] = useState({
    students: [
      { id: 1, name: 'Jakkrit', editingStatus: false },
      { id: 2, name: 'Saovalak', editingStatus: false },
      { id: 3, name: 'Somsri', editingStatus: false },
      { id: 4, name: 'Sombat', editingStatus: false },
      { id: 5, name: 'Somchai', editingStatus: false },
      { id: 6, name: 'Somboon', editingStatus: false },
    ],
  })

  const deleteItemHandler = (deleteKey) => {
    const data = [...studentsState.students]
    const deleteIndex = data.findIndex((item) => {
      return item.id === deleteKey
    })
    data.splice(deleteIndex, 1)
    setStudentsState({
      students: data,
    })
  }

  const editItemHandler = (editKey, data) => {
    const students = [...studentsState.students]
    const editingIndex = students.findIndex((item) => {
      return item.id === editKey
    })
    students[editingIndex] = data
    setStudentsState({
      students: students,
    })
  }

  return (
    <div className="row">
      <h3>Delete and Edit</h3>
      {studentsState.students.map((item) => {
        return (
          <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
            <Student
              data={item}
              deleteStudent={deleteItemHandler.bind(this, item.id)}
              editStudent={editItemHandler.bind(this)}
            />
          </div>
        )
      })}
    </div>
  )
}
export default StudentLists
