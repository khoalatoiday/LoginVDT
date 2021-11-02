import React from "react";

export class SideBarForm extends React.Component {
  constructor(props) {
    super(props);
    const list = this.props.menu;

    this.state = {
      menu0: list[0] ? list[0].name : "",
      menu1: list[1] ? list[1].name : "",
      menu2: list[2] ? list[2].name : "",
      menu3: list[3] ? list[3].name : "",
      menu4: list[4] ? list[4].name : "",
      menu5: list[5] ? list[5].name : "",
      menu6: list[6] ? list[6].name : "",
    };
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout(){
    this.props.onLogout()
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">Menu</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <a href="/dashboard" className="d-block">
                Stock App
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    {this.state.menu0}
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>{this.state.menu1}</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    {this.state.menu2}
                    <i className="fas fa-angle-left right"></i>
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lịch sử nạp/rút tiền</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lịch sử đầu tư</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie"></i>
                  <p>
                    {this.state.menu3}
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree"></i>
                  <p>
                    {this.state.menu4}
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    {this.state.menu5}
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " type="button" onClick={this.onLogout}>
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    {this.state.menu6}
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>

                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt"></i>
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns"></i>
                  <p>Kanban Board</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope"></i>
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    Pages
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/e-commerce.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-add.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/contact-us.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Extras
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v1
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v2
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/lockscreen.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-search"></i>
                  <p>
                    Search
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-ellipsis-h"></i>
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle"></i>
                  <p>
                    Level 1<i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Level 2<i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

/*
  <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
*/
