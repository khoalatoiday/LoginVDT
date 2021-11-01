

const LOGIN = (result) =>{
    return {
        type: "LOGIN",
        result
    }
}

const REGISTER = (result) =>{
    return {
        type: "REGISTER",
        result
    }
}

const EDIT_PROFILE = (result) =>{
    return {
        type: "EDIT_PROFILE",
        result,
    }
}

const UPLOAD_IMAGE = (result) =>{
    return {
        type: "UPLOAD_IMAGE",
        result,
    }
}

const GET_INFO = () =>{
    return {
        type: "GET_INFO",
    }
}

const LOGOUT = () =>{
    return{
        type: "LOGOUT",
    }
}

export {LOGIN, REGISTER, EDIT_PROFILE, UPLOAD_IMAGE, GET_INFO, LOGOUT}