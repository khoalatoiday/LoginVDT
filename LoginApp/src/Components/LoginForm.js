import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const phoneNumber = e.target.elements.phoneNumber.value;
    const password = e.target.elements.password.value;

    console.log("login page", phoneNumber, password);
    const result = { phoneNumber, password };
    this.props.onSubmit(result);
  }

  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Đăng nhập tài khoản</p>

              <form onSubmit={this.onSubmit} method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    name="phoneNumber"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    name="password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label>Ghi nhớ tôi</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Đăng nhập với
                  facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Đăng nhập với
                  Google
                </a>
              </div>

              <p className="mb-1">
                <a href="forgot-password.html">Quên mật khẩu</a>
              </p>
              <p className="mb-0">
                <a href="/register" className="text-center">
                  Đăng kí tài khoản mới
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


