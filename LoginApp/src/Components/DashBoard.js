import React from "react";
import auth from "../api/auth";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import BarChart from "./BarChart";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
    this.onPushOtherComponent = this.onPushOtherComponent.bind(this);
  }

  componentDidMount() {
    const token = auth.getToken("token");
    if (token) {
      this.setState(() => ({
        isAuth: true,
      }));
    } else {
      this.props.history.push("/");
    }
  }

  onPushOtherComponent(path) {
    if (path === "/") {
      this.props.history.push("/");
    } else {
      this.props.history.push(`/${path}`);
    }
  }

  render() {
    const { isAuth } = this.state;
    if (isAuth) {
      return (
        <div>
          <NavBar onPushOtherComponent={this.onPushOtherComponent} />
          <SideBar onPushOtherComponent={this.onPushOtherComponent} />
          <div className="justify-content-center" style={{minHeight: 500, minWidth:1000}}>
            <BarChart  />
          </div>
        </div>
      );
    } else {
      return <div>Loading DashBoard</div>;
    }
  }
}
