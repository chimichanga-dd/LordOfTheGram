
import React from "react";
import { Switch, Route } from "react-router-dom"

import GreetingContainer from "../greeting/greeting_container"
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"

import { AuthRoute, ProtRoute } from "../../util/route_util"


const App = () => (
    <div>
        <header>
            "Lord of the Gram"
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        
    </div>
)

export default App