import { createStore, combineReducers } from "redux";
import profileReducer from "../reducers/profileReducer";
import menuReducer from "../reducers/menuReducer";
import userReducer from "../reducers/userReducer";
export default () =>{
    const store = createStore(
        combineReducers({
            profile: profileReducer,
            menu : menuReducer,
            userInfo: userReducer 
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}