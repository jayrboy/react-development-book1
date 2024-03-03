import { useContext } from 'react'
import { studentContext } from '../context'

export default function Home3() {
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
  const editStudentHandler = (id) => {
    const updatedStudent = {
      id,
      name: 'Student #' + id + 'edit at: ' + new Date().toLocaleTimeString(),
      age: Math.round(Math.random() * 5) + 10,
    }
    contextObj.editStudent(updatedStudent)
  }
  return (
    <>
      <div className="text-center">
        <button
          onClick={addStudentHandler}
          className="btn btn-outline-success btn-sm"
        >
          เพิ่มนักเรียน
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
        {contextObj.data.map((item, index) => {
          return (
            <div
              key={index}
              className="col mt-3 mb-3"
              style={{ width: '18rem' }}
            >
              <div className="card">
                <div className="card-body">
                  <p className="border p-2 text-center rounded-5">
                    {item.name} อายุ {item.age}
                  </p>
                  <div className="text-end">
                    <button
                      onClick={editStudentHandler.bind(this, item.id)}
                      className="btn btn-outline-warning btn-sm"
                    >
                      แก้ไข
                    </button>
                    &nbsp;
                    <button
                      onClick={contextObj.deleteStudent.bind(this, item.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
