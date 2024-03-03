import { Link } from 'react-router-dom'
import { reactbook } from '../data'

const Home = () => {
  return (
    <div className="container mt-3 mx-auto">
      <table className="table table-striped table-borderless table-sm">
        {/* Table Header */}
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>React+Redux+Context+Bootstrap</th>
            <th>Remark</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {reactbook.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>
                  <Link to={data.href} className="btn btn-outline-dark">
                    {data.title}
                  </Link>
                </td>
                <td>{data.remark}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Home
