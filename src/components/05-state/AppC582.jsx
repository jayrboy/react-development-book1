import { Component } from 'react'

class App extends Component {
  state = {
    data: 0,
  }
  increase(number) {
    this.setState((prev) => {
      return { data: prev.data + number }
    })
  }
  render() {
    const random = Math.round(Math.random() * 10) + 1
    return (
      <div className="col-6 mx-auto mt-4">
        <div className="card">
          <div className="card-header text-end">
            <button onClick={this.increase.bind(this, random)}>
              เพิ่ม {random}
            </button>
          </div>
          <div className="card-body text-center">
            Random : {this.state.data}
            &nbsp;<span className="badge bg-danger">class</span>
          </div>
        </div>
      </div>
    )
  }
}
export default App
