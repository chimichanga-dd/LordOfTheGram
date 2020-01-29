
import React from "react";
import GreetingContainer from "../greeting/greeting_container"
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"
import { Switch, Route } from "react-router-dom"


const App = () => (
    <div>
        <header>
            "Lord of the Gram"
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        
    </div>
)

export default App