
import user from "../../api/user"
import auth from "../../api/auth"

const userInfo = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
};

export default async (state = userInfo, action) => {
  console.log("Type of UserReducer", action.type);
  switch (action.type) {
    case "GET_USER_INFO": {
      const token = auth.getToken("token");
      try {
        const respones = await user.getUserInfo(token);
        console.log("Respones of get user info", respones);
        const result = { ...respones.data };
        return result;
      } catch (error) {
        console.log(error.message);
      }
      break;
    }
    default: {
      return state;
    }
  }
};
