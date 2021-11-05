import React from "react";
import auth from "../api/auth";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import BarChart from "./BarChart";
import { connect } from "react-redux";
import { GET_USER } from "../redux/actions/userAction";

export class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
    this.onPushOtherComponent = this.onPushOtherComponent.bind(this);
  }


  async getUserInfo() {
    try {
      await this.props.getUserInfo();
      const result = await this.props.userInfo;
      this.setState(()=>({
        userInfo: result,
        isLoaded: true
      }))
    } catch (error) {
        console.log(error.message)
    }
  }

  componentDidMount() {
    const token = auth.getToken("token");
    if (token) {
      this.setState(() => ({
        isAuth: true,
      }));
      this.getUserInfo()
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
        <SideBar onPushOtherComponent={this.onPushOtherComponent} userInfo = {this.userInfo} />
        <NavBar onPushOtherComponent={this.onPushOtherComponent} />
          <div
            className="d-flex justify-content-center"
            style={{ minHeight: 500, minWidth: 400 }}
          >
            <BarChart />
          </div>
        </div>
      );
    } else {
      return <div>Loading DashBoard</div>;
    }
  }
}


const mapsPropsToRC = (state, props) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapsDispatchToRC = (dispatch) => {
  return {
    getUserInfo: () => dispatch(GET_USER()),
  };
};

export default connect(mapsPropsToRC, mapsDispatchToRC)(DashBoard);
/*
  
*/
