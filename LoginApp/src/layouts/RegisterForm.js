import React from "react";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.name.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.setState(() => {
      username, phoneNumber, email, password;
    });

    const result = {
      username,
      phoneNumber,
      email,
      password,
    };

    this.props.onSubmit(result);
  }

  render() {
    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Đăng kí thành viên mới</p>

              <form method="post" onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone Number"
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
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    name="name"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Password"
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
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />
                      <label>
                        Tôi đồng ý với  <a href="#">điều khoản</a>
                      </label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Đăng kí
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Đăng nhập với Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  Đăng nhập với Google
                </a>
              </div>

              <a href="/" className="text-center">
                Tôi đã có tài khoản
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
