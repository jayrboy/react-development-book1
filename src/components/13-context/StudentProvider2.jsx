import { studentContext } from './context'
import { useState } from 'react'
import Home2 from './components/Home2'

export const StudentProvider2 = () => {
  const [studentData, setStudentData] = useState([
    { id: 1, name: 'jakkrit', age: 14 },
    { id: 2, name: 'sombat', age: 15 },
    { id: 3, name: 'somsri', age: 13 },
  ])
  const addStudentHandler = (newStudent) => {
    setStudentData([...studentData, newStudent])
  }
  return (
    <studentContext.Provider
      value={{
        data: studentData,
        addStudent: (student) => addStudentHandler(student),
      }}
    >
      <Home2 />
    </studentContext.Provider>
  )
}
