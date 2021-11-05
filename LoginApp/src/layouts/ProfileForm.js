import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { Buffer } from "buffer";


export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
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
      image: this.props.myProfile.image ? this.props.myProfile.image : "",
      frontIdCard: this.props.myProfile.frontIdCard
        ? this.props.myProfile.frontIdCard
        : "",
      backIdCard: this.props.myProfile.backIdCard
        ? this.props.myProfile.backIdCard
        : "",
      base64ImageString: [],
    };

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

      if (typeof this.state.image != "Buffer") {
        await this.props.onUploadImage(this.state.image);
      }

      if (typeof this.state.frontIdCard != "Buffer") {
        await this.props.onUploadIdCardImageFront(this.state.frontIdCard);
      }

      if (typeof this.state.backIdCard != "Buffer") {
        await this.props.onUploadIdCardImageBack(this.state.backIdCard);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

 

  componentDidMount() {
    // const base64String = btoa(
    //   String.fromCharCode(...new Uint8Array(this.state.image.data))
    // );

    let buff1 = new Buffer(this.state.image);
    let buff2 = new Buffer(this.state.frontIdCard);
    let buff3 = new Buffer(this.state.backIdCard);
    let base64data1 = buff1.toString("base64");
    let base64data2 = buff2.toString("base64");
    let base64data3 = buff3.toString("base64");
    const base64dataList = [];
    base64dataList.push(base64data1, base64data2, base64data3);
    this.setState({
      base64ImageString: base64dataList,
    });
  }
// 
  render() {
    const listImage = [];
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="hold-transition text-center">
            <div className="card card-primary" style={{ minWidth: 500 }}>
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
                      onFocusChange={({ focused }) =>
                        this.setState({ focused })
                      }
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
                      onChange={(e) =>
                        this.setState({ idCard: e.target.value })
                      }
                      value={this.state.idCard}
                      required={true}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label card-title">
                      Your Address
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="address"
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
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
                            console.log(e.target.files[0]);
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
                      src={`data:png;base64,${this.state.base64ImageString[0]}`}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label card-title">
                    Your Front Id Card{" "}
                  </label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={(e) => {
                          let image = document.getElementById("front-id-card");
                          image.src = URL.createObjectURL(e.target.files[0]);
                          console.log(e.target.files[0]);
                          this.setState({
                            frontIdCard: e.target.files[0],
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    id="front-id-card"
                    width="250"
                    height="250"
                    src={`data:png;base64,${this.state.base64ImageString[1]}`}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label card-title">
                    Your Back Id Card
                  </label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={(e) => {
                          let image = document.getElementById("back-id-card");
                          image.src = URL.createObjectURL(e.target.files[0]);
                          console.log(e.target.files[0]);
                          this.setState({
                            backIdCard: e.target.files[0],
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    id="back-id-card"
                    width="250"
                    height="250"
                    src={`data:png;base64,${this.state.base64ImageString[2]}`}
                  />
                </div>

                <button type="submit" className="btn btn-lg btn-primary">
                  Lưu thành công
                </button>
              </form>
              <div className="card-footer">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
