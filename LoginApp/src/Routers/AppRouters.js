import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import React from "react";
import EditProfile from "../Components/EditProfile";
import DashBoard from "../Components/DashBoard";
export default class AppRouters extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Login} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                        <Route path="/profile" component={EditProfile} exact={true}/>
                        <Route path="/dashboard" component={DashBoard} exact={true} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


