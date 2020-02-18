
import React from "react";
import { Switch } from "react-router-dom"

import NavBarContainer from "../navbar/nav_container"
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"

import { AuthRoute, ProtRoute } from "../../util/route_util"
import FeedContainer from "../post/feed/feed_container"
import UserPageContainer from "../user/user_page_container"
import UserProfileContainer from "../user/user_profile_container"
import UserEditContainer from "../user/user_edit_container"
import UploadContainer from "../post/upload/upload_container"
import ModalContainer from "../modal/modal_container"


const App = () => (
    <div>
        <header>
            <ProtRoute component={NavBarContainer} /> {/*routes without a path always match*/}
        </header>
        <ModalContainer />
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />

            <ProtRoute path="/upload" component={UploadContainer} />
            <ProtRoute path="/profile/edit" component={UserEditContainer} />
            <ProtRoute path="/profile" component={UserProfileContainer} />
            <ProtRoute path="/users/:userId" component={UserPageContainer} />
            <ProtRoute path="/" component={FeedContainer} />  
            
        </Switch>
      

    </div>
)

export default App