import api, { baseApi } from "./index";
import index from "./index"

const resApi = baseApi("user");


const login = async (data) => {
  return await api.post("/users/login", data);
};

const register = (data) => {
   return api.post("/users/create", data);
}

const getProfile = (token) => {
  index.setToken(token)
  return api.get("/profile/me");
};

const editProfile = (data,token) => {
  index.setToken(token)
  return api.patch("/profile/upload",data)
}

const updloadProfile = (data,token) => {
  index.setToken(token)
  return api.post("/profile/me/image",data)
}

const logout = (token) =>{
  index.setToken(token)
  return api.post("/users/logout",undefined)
}

const uploadIdCardImageFront = (data,token)=>{
  index.setToken(token)
  return api.post("/profile/idCardImage/front",data)
}

const uploadIdCardImageBack = (data,token) =>{
  index.setToken(token)
  return api.post("/profile/idCardImage/back", data)
}

export default {
    ...resApi,
    login,
    register,
    getProfile,
    editProfile,
    updloadProfile,
    logout,
    uploadIdCardImageFront,
    uploadIdCardImageBack
}
