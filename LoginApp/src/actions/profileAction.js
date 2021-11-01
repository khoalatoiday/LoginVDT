

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

const UPLOAD_IMAGE_Id_Card_Front = (result) =>{
    return {
        type: "UPLOAD_IMAGE_Id_Card_Front",
        result,
    }
}

const UPLOAD_IMAGE_Id_Card_Back = (result) =>{
    return {
        type: "UPLOAD_IMAGE_Id_Card_Back",
        result,
    }
}

export {LOGIN, REGISTER, EDIT_PROFILE, UPLOAD_IMAGE, GET_INFO, LOGOUT, UPLOAD_IMAGE_Id_Card_Front, UPLOAD_IMAGE_Id_Card_Back}