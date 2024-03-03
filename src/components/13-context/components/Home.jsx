import { useContext } from 'react'
import { studentContext } from '../context'

export default function Home() {
  const { users } = useContext(studentContext)

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="border rounded-1 p-3 text-center mt-1">
            <p>
              {user.name} อายุ {user.age}
            </p>
          </div>
        )
      })}
    </div>
  )
}
