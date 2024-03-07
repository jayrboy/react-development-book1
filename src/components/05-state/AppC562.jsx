import { Component } from 'react'

class App extends Component {
  state = {
    data: 0,
  }
  increase() {
    this.setState((prev) => {
      return { data: prev.data + 1 }
    })
  }
  render() {
    return (
      <div className="col-8 col-sm-6 mx-auto mt-4">
        <div className="card text-center">
          <div className="card-header">
            <button onClick={this.increase.bind(this)}>
              Click Class Component
            </button>
          </div>
          <div className="card-body">
            Current : {this.state.data} &nbsp;
            <span className="badge bg-danger">class</span>
          </div>
        </div>
      </div>
    )
  }
}
export default App
