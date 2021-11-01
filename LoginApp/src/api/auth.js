import api from "./index";

// const keyAuth = 'vue_auth_token';
// const login = (data) => api.post('users/login', data);
// const register = (data) => api.post('users/create', data);
const changePassword = (data) => api.post('auth/changePassword', data);
const me = () => api.get('auth/user');
const logout = () => api.get('auth/logout');
const checkAuth = () => {
    const accessToken = localStorage.getItem(keyAuth);
    if (accessToken != undefined) {
        api.setToken(accessToken);
        return true;
    }
    return false;
};
const getUserMe = async () => {
    checkAuth()
    return await me();
}
const setToken = (keyToken, accessToken) => {
    api.setToken(accessToken);
    localStorage.setItem(keyToken, accessToken);
};

const getToken = (keyToken) =>{
    return localStorage.getItem(keyToken)
}



const clearToken = (keyToken,isAuth = undefined) => {
    // if (isAuth) {
    //     logout();
    // }
    api.clearToken();
    localStorage.removeItem(keyToken);
};
export default {
     getToken, me, checkAuth, setToken, clearToken, changePassword, getUserMe
};

//login, register,