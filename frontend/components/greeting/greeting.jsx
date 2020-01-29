import React from "react"
import { Link } from "react-router-dom"

const Greeting = ({currentUser, logout}) => {

    const personalGreeting = () => (
        <nav>
            Welcome, {currentUser.username}
            <button onClick={logout}>Logout!</button>
        </nav>
    )

    const sessionLinks = () => (
        <nav>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign up</Link>
        </nav>
    )

    return currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting