import { Component } from 'react'
import StudentLists from './StudentLists'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Student Lists</h3>
        <StudentLists />
      </div>
    )
  }
}
export default App
