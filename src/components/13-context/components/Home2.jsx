import { useContext } from 'react'
import { studentContext } from '../context'

export default function Home() {
  const contextObj = useContext(studentContext)

  const addStudentHandler = () => {
    const id = `${contextObj.data.length + 1}`
    const newStudent = {
      id,
      name: 'Student #' + id,
      age: Math.round(Math.random() * 5) + 10,
    }
    contextObj.addStudent(newStudent)
  }

  return (
    <div>
      <button className="btn btn-success btn-sm" onClick={addStudentHandler}>
        เพิ่มนักเรียน
      </button>
      {contextObj.data.map((item, index) => {
        return (
          <div key={index} className="border rounded-3 p-2 mt-2">
            <p>
              {item.name} อายุ {item.age}
            </p>
          </div>
        )
      })}
    </div>
  )
}
