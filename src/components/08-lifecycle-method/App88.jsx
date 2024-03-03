import { PureComponent } from 'react'

class App extends PureComponent {
  state = {
    status: true,
  }
  render() {
    console.log('Render for component!!!')
    return (
      <div className="container border rounded-1 p-2">
        <button className="btn btn-outline-info" onClick={this.clickMeHandler}>
          Click me to change
        </button>
        <hr />
        {this.showHide()}
      </div>
    )
  }
  checkCondition = () => {
    return this.state.status
  }
  showHide = () => {
    return this.checkCondition() ? <div>Show</div> : <div>Hide</div>
  }
  clickMeHandler = () => {
    this.setState({
      status: false,
    })
  }
}
export default App
