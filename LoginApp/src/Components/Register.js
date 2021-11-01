import React from "react";
import { connect } from "react-redux";
import { REGISTER } from "../actions/profileAction";

import RegisterForm from "./RegisterForm";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phoneNumber: "",
      email: "",
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(result) {
    this.props.register(result);
   // this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapToPropsStateToRC = () => {
  return {};
};

const mapDispatchToRC = (dispatch) => {
  return {
    register: (result) => dispatch(REGISTER(result)),
  };
};

export default connect(mapToPropsStateToRC, mapDispatchToRC)(Register);
