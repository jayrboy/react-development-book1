import { Component } from 'react'
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log(this.state)
  }
  render() {
    return (
      <>
        <h3>Login Form v2</h3>
        <div className="col-6 mt-5 mx-auto card">
          <div className="card-body ">
            <form>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary
                     my-1"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default LoginForm
