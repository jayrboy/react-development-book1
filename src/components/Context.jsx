import { StudentProvider } from './13-context/StudentProvider'
import { StudentProvider2 } from './13-context/StudentProvider2'
import { StudentProvider3 } from './13-context/StudentProvider3'

const Context = () => {
  return (
    <div className="container-sm mt-5 mb-5">
      <StudentProvider />
      <hr />
      <StudentProvider2 />
      <hr />
      <StudentProvider3 />
    </div>
  )
}
export default Context
