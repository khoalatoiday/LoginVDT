import React from "react";
import { connect } from "react-redux";
import { GET_ALL_MENU } from "../actions/menuAction";
import {SideBarForm} from "./SideBarForm";
import { LOGOUT } from "../actions/profileAction";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      isLoad: false
    };
    this.onLogout = this.onLogout.bind(this)
    this.getAllMenu = this.getAllMenu.bind(this)
  }

  async getAllMenu() {
    await this.props.getAllMenus();
    const result = await this.props.menu;
    this.setState(() => ({
      menu: result,
      isLoad: true
    }));
    
  }

  onLogout() {
    this.props.logOut();
    console.log(localStorage.getItem("token"));
    this.props.onPushOtherComponent("/")
  }

  componentDidMount() {
    this.getAllMenu();
  }

  render() {
    const {isLoad} = this.state
    console.log("state menu of sidebar", this.state.menu)
    if(isLoad){
      return (
        <div>
          <SideBarForm menu={this.state.menu} onLogout={this.onLogout}/>
        </div>
      );
    }else{
      return (<div>Loading</div>)
    }
  }
}

const mapsPropsToRC = (state, props) => {
  return {
    menu: state.menu,
  };
};

const mapsDispatchToRC = (dispatch) => {
  return {
    getAllMenus: () => dispatch(GET_ALL_MENU()),
    logOut: () => dispatch(LOGOUT()),
  };
};

export default connect(mapsPropsToRC, mapsDispatchToRC)(SideBar);
