import React from "react";
import { connect } from "react-redux";
import { GET_ALL_MENU } from "../redux/actions/menuAction";
import { SideBarForm } from "../layouts/SideBarForm";
import { LOGOUT } from "../redux/actions/profileAction";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      isLoad: false,
    };
    this.onLogout = this.onLogout.bind(this);
    this.getAllMenu = this.getAllMenu.bind(this);
  }

  async getAllMenu() {
    
    const user = await this.props.userInfo
    const role = {
      role: user.role
    }

    const role1 = JSON.stringify(role)

    console.log("role1", role1)

    await this.props.getAllMenus(role1);
    const result = await this.props.menu;
    this.setState(() => ({
      menu: result,
      isLoad: true,
    }));
  }

  onLogout() {
    this.props.logOut();
    console.log(localStorage.getItem("token"));
    this.props.onPushOtherComponent("/");
  }

  componentDidMount() {
    this.getAllMenu();
  }

  render() {
    const { isLoad } = this.state;
    console.log("state menu of sidebar", this.state.menu);
    if (isLoad) {
      return <SideBarForm menu={this.state.menu} onLogout={this.onLogout} />;
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapsPropsToRC = (state, props) => {
  return {
    menu: state.menu,
    userInfo: state.userInfo
  };
};

const mapsDispatchToRC = (dispatch) => {
  return {
    getAllMenus: (role) => dispatch(GET_ALL_MENU(role)),
    logOut: () => dispatch(LOGOUT()),
  };
};

export default connect(mapsPropsToRC, mapsDispatchToRC)(SideBar);
