import React from "react";
import { connect } from "react-redux";
import { LOGIN } from "../actions/profileAction";
import auth from "../api/auth";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit= this.onSubmit.bind(this)
  }

  async onSubmit(result) {
    var rs = await this.props.login(result);
    console.log('show rs', rs)
    setTimeout(()=>{
      this.props.history.push("/dashboard")
    },1000)
  };


  componentDidMount(){
    const token = auth.getToken("token")
    if(token){
      console.log("yes")
      this.props.history.push("/dashboard")
    }else{
      console.log("no")
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapPropsStateToRC = (state, props) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToRC = (dispatch) => {
  return {
    login: (result) => dispatch(LOGIN(result)),
  };
};

export default connect(mapPropsStateToRC, mapDispatchToRC)(Login);
