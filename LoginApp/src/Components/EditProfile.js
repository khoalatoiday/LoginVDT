import React from "react";
import { connect } from "react-redux";
import ProfileForm from "../layouts/ProfileForm";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import {
  EDIT_PROFILE,
  GET_INFO,
  LOGOUT,
  UPLOAD_ID_CARD_IMAGE,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_Id_Card_Back,
  UPLOAD_IMAGE_Id_Card_Front,
} from "../redux/actions/profileAction";
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
    this.onUploadIdCardImageFront = this.onUploadIdCardImageFront.bind(this);
    this.onUploadIdCardImageBack = this.onUploadIdCardImageBack.bind(this);
    this.onPushOtherComponent = this.onPushOtherComponent.bind(this);
  }

  async getMyProfile() {
    const token = auth.getToken("token");
    console.log("show profile", token);

    if (token) {
      try {
        await this.props.getInfo(token);
        const result = await this.props.profile;
        console.log("result", result);
        await this.setState({ myProfile: { ...result }, isGet: true });
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

  onUploadIdCardImageFront(result) {
    this.props.uploadIdCardFront(result);
    this.props.history.push("/profile");
  }

  onUploadIdCardImageBack(result) {
    this.props.uploadIdCardBack(result);
    this.props.history.push("/profile");
  }

  componentDidMount() {
    this.getMyProfile();
  }

  onPushOtherComponent(path) {
    if (path === "/") {
      this.props.history.push("/");
    } else {
      this.props.history.push(`/${path}`);
    }
  }

  render() {
    const { isGet } = this.state;
    if (isGet) {
      return (
        <div>
          <SideBar onPushOtherComponent={this.onPushOtherComponent} />
          <NavBar onPushOtherComponent={this.onPushOtherComponent} />
          <ProfileForm
            myProfile={this.state.myProfile}
            onEditProfile={this.onEditProfile}
            onUploadImage={this.onUploadImage}
            onUploadIdCardImageFront={this.onUploadIdCardImageFront}
            onUploadIdCardImageBack={this.onUploadIdCardImageBack}
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

    uploadIdCardFront: (result) => dispatch(UPLOAD_IMAGE_Id_Card_Front(result)),
    uploadIdCardBack: (result) => dispatch(UPLOAD_IMAGE_Id_Card_Back(result)),
  };
};

export default connect(mapsPropsToRC, mapDispatchToRC)(EditProfile);

/*
  
*/
