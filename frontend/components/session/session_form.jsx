
import React from "react"
import { Redirect, Link} from "react-router-dom"
import Loader from "../ui/loader"

class SessionForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(attribute){
        return (e) => this.setState({[attribute]: e.currentTarget.value})
    }

    renderOtherLink(path){
        if (path == "login"){
            return (
                <div className="session-content-2 other-link">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            )
        } else {
            return (
                <div className="session-content-2 other-link">
                    <p>Have an account? <Link to="/login">Log in</Link></p>
                </div>
            )
        }
    }

    handleSubmit(e){
        e.preventDefault()
        let user = { username: this.state.username, password: this.state.password}
        this.props.submitForm(user).then(
            <Redirect to="/" />
        )
    }

    renderDemoLoginButton(path){
        if (path == "login"){
            return <button onClick={(e) => this.demoLogin(e)} className="demo-button">Demo Login</button>
        }
        return null
    }

    demoLogin(e){
        e.preventDefault()
        let demoUser = {username: "MemeLord", password: "memer12"}
        this.props.submitForm(demoUser).then(
            <Redirect to="/" />
        )
    }

    render(){
        let path = this.props.match.url.substring(1)
       
        return(
            <div className="session-container">
                <img className="session-image" src={window.images.gram_phone} alt="gram screenshot displayed on phone"/>
                <div className="session-content">
                    <div className="session-content-1">
                        <img className="session-title" src={window.images.lotg}/>
                        <h2>Log in to see photos and videos from Middle Earth.</h2>
                        <form className="session-form">
                            {this.props.errors.map((error, idx) => (<div key={`error-${idx + 1}`} className="error">{error}</div>))}
                            <input
                                type="text"
                                id="session-form-username"
                                value={this.state.username}
                                onChange={this.handleInput("username")}
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                id="session-form-password"
                                value={this.state.password}
                                onChange={this.handleInput("password")}
                                placeholder="Password"
                            />
                            <button onClick={this.handleSubmit}>{this.props.formAction}</button>
                            {this.renderDemoLoginButton(path)}
                        </form>
                        <h2>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h2>
                    </div>
                    {this.renderOtherLink(path)}
                </div>
            </div>
        )
    }

}

export default SessionForm