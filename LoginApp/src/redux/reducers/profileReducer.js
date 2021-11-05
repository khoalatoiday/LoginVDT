
import user from "../../api/user"
import auth from "../../api/auth"
const defaultProfile = {
  yourname: "",
  address: "",
  idCard: 0,
  date: 0,
  token: "",
};

export default async (state = defaultProfile, action) => {
  console.log("Type", action.type);
  switch (action.type) {
    case "LOGIN": {
      let result = {};
      try {
        const respones = await user.login(action.result); // axios trả về 1 Object
        console.log("response of login action", respones);
        await auth.setToken("token", respones.data.token);
        var getToken = auth.getToken("token");
        console.log("token of user", getToken);
        result = {
          ...respones.data,
          token: getToken,
        };
        // const token = auth.getToken("token");
        // console.log('token11111', token);
      } catch (error) {
        console.log(error.message);
      }
      return result;
    }

    case "REGISTER": {
      let result = {};
      try {
        const responses = await user.register(action.result);
        console.log("response of register action", responses);
        result = {
          ...responses.data,
          token: responses.data.token,
        };
        auth.setToken("token", result.token);
        return result;
      } catch (error) {
        console.log(error.message);
      }
      break;
    }
    case "EDIT_PROFILE": {
      let result = {};
      const token = auth.getToken("token");
      try {
        const response = await user.editProfile(action.result, token);
        console.log("response of edit action", response);
        result = {
          ...response.data,
          token: response.data.token,
        };
        return result;
      } catch (error) {
        console.log(error.message);
      }
      break;
    }
    case "UPLOAD_IMAGE": {
      let result = {};
      const token = auth.getToken("token");
      try {
        const data = new FormData();
        data.append("name", action.result.name);
        data.append("image", action.result);
        const response = await user.updloadProfile(data, token);
        console.log("response of upload action", response);
        result = {
          ...response.data,
          token: response.data.token,
        };
        return result;
      } catch (error) {
        console.log(error.message);
      }
      break;
    }

    case "GET_INFO": {
      let result = {};
      const token = auth.getToken("token");
      try {
        const response = await user.getProfile(token);
        console.log("response of get info action", response);
        result = {
          ...response.data,
          token: response.data.token,
        };
        return result;
      } catch (error) {
        console.log(error.message);
      }
      break;
    }

    case "LOGOUT": {
      try {
        const token = auth.getToken("token");
        console.log("token logout", token);
        auth.clearToken("token");
        await user.logout(token);
        return {};
      } catch (error) {
        console.log(error.message);
      }
      break;
    }

    case "UPLOAD_IMAGE_Id_Card_Front": {
      let result = {}
      const token = auth.getToken("token")
      try {
        const data = new FormData()
        data.append("imageIdCardFront", action.result)

        const respones = await user.uploadIdCardImageFront(data,token)
        console.log("response of upload idCard Front", respones)
        result = {
          ...respones.data,
          token: respones.data.token,
        };

      } catch (error) {
        console.log(error.message)
      }
      return result
    }

    case "UPLOAD_IMAGE_Id_Card_Back": {
      let result = {}
      const token = auth.getToken("token")
      try {
        const data = new FormData()
        data.append("imageIdCardBack",action.result)

        const response = await user.uploadIdCardImageBack(data,token)
        console.log("Reponese of upload idCard Back", response)

        result ={
          ...response.data,
          token: response.data.token
        }
      } catch (error) {
        console.log(error.message)
      }
      return result
    }

    default:{
      return state
    }
  }
};
