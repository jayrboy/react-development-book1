import { studentContext } from './context'
import { useState } from 'react'
import Home from './components/Home'

export const StudentProvider = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'jakkrit', age: 14 },
    { id: 2, name: 'sombat', age: 15 },
    { id: 3, name: 'mintra', age: 13 },
  ])

  return (
    <studentContext.Provider value={{ users, setUsers }}>
      <Home />
    </studentContext.Provider>
  )
}
