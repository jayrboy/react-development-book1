import { useState } from 'react'

const App = () => {
  let [state, setState] = useState({
    user: 'Jakkrit',
    password: 'thisIsAbook',
    address: {
      houseNo: '123',
      province: 'กรุงเทพฯ',
    },
  })

  const userClick = () => {
    setState({
      ...state,
      user: 'Ronaldo',
      password: 'IloveyouMoreToday123',
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 mx-auto">
          <div className="card ml-5 mr-5">
            <div className="card-header">
              <button className="btn btn-success btn-sm" onClick={userClick}>
                คลิกผมหน่อยนะ
              </button>
            </div>
            <div className="card-body">
              user: <span className="ml-2">{state.user}</span> <br />
              password: <span className="ml-2">{state.password}</span> <br />
              address: <span className="ml-2">{state.address.houseNo}</span>
              &nbsp;
              <span className="ml-1">{state.address.province}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
