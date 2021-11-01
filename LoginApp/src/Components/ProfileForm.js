import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { Buffer } from "buffer";
import Resizer from "react-image-file-resizer";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    // const yourname = this.props.myProfile.yourname;
    //  const idCard = this.props.myProfile.idCard
    //  const address = this.props.myProfile.address
    //  const date = this.props.myProfile.date
    console.log("profile form", this.props.myProfile);
    this.state = {
      yourname: this.props.myProfile.yourname
        ? this.props.myProfile.yourname
        : "",
      idCard: this.props.myProfile.idCard ? this.props.myProfile.idCard : 0,
      address: this.props.myProfile.address ? this.props.myProfile.address : "",
      date: this.props.myProfile.date
        ? moment(this.props.myProfile.date)
        : moment(),
      focused: false,
      image: this.props.myProfile.image ? this.props.myProfile.image : null,
      base64ImageString: "",
    };

    this.onLogout = this.onLogout.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const yourname = this.state.yourname;
    const address = this.state.address;
    const idCard = this.state.idCard;
    const date = this.state.date.valueOf();

    const result = {
      yourname,
      address,
      idCard,
      date,
    };

    console.log(this.state.image);

    try {
      await this.props.onEditProfile(result, this.props.myProfile.token);

      if (this.state.image.type !== "Buffer") {
        await this.props.onUploadImage(this.state.image);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  onLogout() {
    this.props.onLogout();
  }

  componentDidMount() {
    // const base64String = btoa(
    //   String.fromCharCode(...new Uint8Array(this.state.image.data))
    // );

    let buff = new Buffer(this.state.image);
    let base64data = buff.toString("base64");
    this.setState({
      base64ImageString: base64data,
    });
  }

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="hold-transition text-center">
          <div className="card card-primary" style={{ minWidth: 600 }}>
            <div className="card-header">
              <h3 className="card-title">Thay đổi profile</h3>
            </div>

            <form
              onSubmit={this.onSubmit}
              encType="multipart/form-data"
              method="post"
            >
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label card-title">Your Name</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder="yourname"
                    name="yourname"
                    onChange={(e) =>
                      this.setState({ yourname: e.target.value })
                    }
                    value={this.state.yourname}
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label card-title">Birthday</label>

                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={(date) => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="your_unique_id"
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label card-title">
                    Your Identify Card
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="idCard"
                    placeholder="idCard"
                    onChange={(e) => this.setState({ idCard: e.target.value })}
                    value={this.state.idCard}
                    required={true}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label card-title">Your Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    placeholder="address"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    value={this.state.address}
                    required={true}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label card-title">Your Image</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={(e) => {
                          let image = document.getElementById("output");
                          image.src = URL.createObjectURL(e.target.files[0]);
                          this.setState({
                            image: e.target.files[0],
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    id="output"
                    width="250"
                    height="250"
                    src={`data:png;base64,${this.state.base64ImageString}`}
                  />
                </div>
              </div>

            
                <button type="submit" className="btn btn-lg btn-primary">
                  Lưu thành công
                </button>
              
            </form>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.onLogout}>
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
