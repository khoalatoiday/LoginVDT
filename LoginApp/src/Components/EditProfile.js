import React from "react";
import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import {
  EDIT_PROFILE,
  GET_INFO,
  LOGOUT,
  UPLOAD_IMAGE,
} from "../actions/profileAction";
import auth from "../api/auth";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProfile: {},
      isGet: false,
      isLoaded: true,
    };
    this.getMyProfile = this.getMyProfile.bind(this);
    this.onEditProfile = this.onEditProfile.bind(this);
    this.onUploadImage = this.onUploadImage.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async getMyProfile() {
    const token = auth.getToken("token");
    console.log('show profile', token)

    if (token) {
      try {
        await this.props.getInfo(token);
        const result = await this.props.profile;
        console.log("result", result);
        await this.setState({ myProfile: { ...result }, isGet: true });
        console.log("state 2", this.state.myProfile);
      } catch (error) {
        console.log(error);
      }
    }
  }

  onEditProfile(result) {
    this.props.editProfile(result);
    this.props.history.push("/profile");
  }

  onUploadImage(result) {
    this.props.uploadImage(result);
    this.props.history.push("/profile");
  }

  onLogout() {
    this.props.logOut();
    console.log(localStorage.getItem("token"));
    this.props.history.push("/");
  }

  componentDidMount() {
    this.getMyProfile();
  }

  // componentDidUpdate(){
  //   this.getMyProfile();
  // }

  render() {
    const { isGet } = this.state;
    if (isGet) {
      return (
        <div>
          <ProfileForm
            myProfile={this.state.myProfile}
            onEditProfile={this.onEditProfile}
            onUploadImage={this.onUploadImage}
            onLogout={this.onLogout}
          />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapsPropsToRC = (state, props) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToRC = (dispatch) => {
  return {
    getInfo: (token) => dispatch(GET_INFO(token)),
    editProfile: (result) => dispatch(EDIT_PROFILE(result)),
    uploadImage: (result) => dispatch(UPLOAD_IMAGE(result)),
    logOut: () => dispatch(LOGOUT()),
  };
};

export default connect(mapsPropsToRC, mapDispatchToRC)(EditProfile);
