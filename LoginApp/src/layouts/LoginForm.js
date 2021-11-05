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
      <div>
        <div className="container position-sticky z-index-sticky top-0">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                <div className="container-fluid">
                  <a
                    className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                    href="../pages/dashboard.html"
                  >
                    Soft UI Dashboard
                  </a>
                  <button
                    className="navbar-toggler shadow-none ms-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon mt-2">
                      <span className="navbar-toggler-bar bar1"></span>
                      <span className="navbar-toggler-bar bar2"></span>
                      <span className="navbar-toggler-bar bar3"></span>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link d-flex align-items-center me-2 active"
                          aria-current="page"
                          href="../pages/dashboard.html"
                        >
                          <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link me-2"
                          href="../pages/profile.html"
                        >
                          <i className="fa fa-user opacity-6 text-dark me-1"></i>
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link me-2"
                          href="/register"
                        >
                          <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                          Sign Up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link me-2"
                          href="../pages/sign-in.html"
                        >
                          <i className="fas fa-key opacity-6 text-dark me-1"></i>
                          Sign In
                        </a>
                      </li>
                    </ul>
                    <ul className="navbar-nav d-lg-block d-none">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/product/soft-ui-dashboard"
                          className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                        >
                          Free download
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <main className="main-content  mt-0">
          <section>
            <div className="page-header min-vh-75">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                    <div className="card card-plain mt-8">
                      <div className="card-header pb-0 text-left bg-transparent">
                        <h3 className="font-weight-bolder text-info text-gradient">
                          Chào mừng bạn trở lại!
                        </h3>
                        <p className="mb-0">
                          Điền số điện thoại và mật khẩu để đăng nhập
                        </p>
                      </div>
                      <div className="card-body">
                        <form method="post" onSubmit={this.onSubmit}>
                          <label>Số điện thoại</label>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Số điện thoại"
                              aria-label="Email"
                              aria-describedby="email-addon"
                              name="phoneNumber"
                            />
                          </div>
                          <label>Password</label>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              aria-label="Password"
                              aria-describedby="password-addon"
                              name="password"
                            />
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Ghi nhớ tôi
                            </label>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn bg-gradient-info w-100 mt-4 mb-0"
                            >
                              Đăng nhập
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <p className="mb-4 text-sm mx-auto">
                          Don't have an account?
                          <a className="text-info text-gradient font-weight-bold">
                            Sign up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                      <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-4 mx-auto text-center">
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Company
                </a>
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  About Us
                </a>
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Team
                </a>
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Products
                </a>
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Blog
                </a>
                <a
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Pricing
                </a>
              </div>
              <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-dribbble"></span>
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-twitter"></span>
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-instagram"></span>
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-pinterest"></span>
                </a>
                <a target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-github"></span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-8 mx-auto text-center mt-1">
                <p className="mb-0 text-secondary">
                  Copyright ©{" "}
                  <script>document.write(new Date().getFullYear())</script> Soft
                  by Creative Tim.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
