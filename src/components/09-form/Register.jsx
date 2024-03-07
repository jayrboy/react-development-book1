import { Component } from 'react'
class Register extends Component {
  render() {
    return (
      <>
        <h3>Register</h3>
        <div className="row">
          <div className="col-sm-3 mt-5"></div>
          <div className="col-sm-6 mt-5 card">
            <div className="card-body ml-3 mr-3 mt-5 mb-1">
              <form>
                <div className="form-group">
                  <label htmlFor="username">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                  />
                  <div className="invalid-feedback">
                    กรอกชื่อผู้ใช้อย่างน้อย 5 ตัวอักษร
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  <div className="invalid-feedback">คุณกรอกอีเมลไม่ถูกต้อง</div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <div className="invalid-feedback">
                    ต้องกรอกอย่างน้อย 8 ตัวอักษร
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-3 mt-5"></div>
        </div>
      </>
    )
  }
}
export default Register
