import React from "react";
import { connect } from "react-redux";
import { GET_USER } from "../actions/userAction";
import NavBarFrom from "./NavBarForm";
export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      isLoaded: false,
    };
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
    this.getUserInfo();
  }

  render() {
    const {isLoaded} = this.state
    if(isLoaded){
        return (
            <div>
              <NavBarFrom userInfo={this.state.userInfo}/>
            </div>
          );
    }else{
        return (<div>Loading</div>)
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

export default connect(mapsPropsToRC, mapsDispatchToRC)(NavBar);
