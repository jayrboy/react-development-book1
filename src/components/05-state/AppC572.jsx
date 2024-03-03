import { Component } from 'react'

class App extends Component {
  state = {
    data: 0,
  }
  increase = () => {
    this.setState((prev) => {
      return { data: prev.data + 1 }
    })
  }
  decrease() {
    this.setState((prev) => {
      return { data: prev.data - 1 }
    })
  }
  render() {
    return (
      <div className="col-6 mx-auto mt-4">
        <div className="card">
          <div className="card-header text-end">
            <button onClick={this.increase}>เพิ่ม</button>
            &nbsp;
            <button onClick={() => this.decrease()}>ลด</button>
          </div>
          <div className="card-body text-center">
            Number : {this.state.data}
            &nbsp;<span className="badge bg-danger">class</span>
          </div>
        </div>
      </div>
    )
  }
}
export default App
