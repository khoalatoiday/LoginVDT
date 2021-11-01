import { createStore, combineReducers } from "redux";
import profileReducer from "../reducers/profileReducer";

export default () =>{
    const store = createStore(
        combineReducers({
            profile: profileReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


    
    return store
}