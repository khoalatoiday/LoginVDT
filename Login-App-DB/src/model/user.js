const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({

    idUser: {
        type: String,
        trim: true,
    },

  email: {
    type: String,
    required: true,
    trim: true,
    validate() {
      if (!validator.isEmail) {
        throw new Error("Email không hợp lệ");
      }
    },
  },

  username: {
    type: String,
    required: true,
    trim: "true",
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.virtual("myProfile", {
  ref: "Profile",
  localField: "_id", 
  foreignField: "owner",
});



userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const userToken = jwt.sign({ _id: user._id.toString() }, "thisissercret");
  
  user.tokens = user.tokens.concat({ token: userToken });
  await user.save()
  return userToken;
};



userSchema.statics.findByCredentials = async (phoneNumber, password) => {
  const user = await User.findOne({ phoneNumber });
  if (!phoneNumber) {
    throw new Error("Wrong phone number");
  }
  const isMatchPassword = await bcrypt.compare(password, user.password);
  if (!isMatchPassword) {
    throw new Error("Wrong password");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isDirectModified("password")) {
    const oldPass = user.password;
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
