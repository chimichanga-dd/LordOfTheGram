
import React from "react";
import { Switch, Route } from "react-router-dom"

import GreetingContainer from "../greeting/greeting_container"
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"

import { AuthRoute, ProtRoute } from "../../util/route_util"
import FeedContainer from "../post/feed/feed_container"

const App = () => (
    <div>
        <header>
            "Lord of the Gram"
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <ProtRoute path="/" component={FeedContainer} />        
    </div>
)

export default App