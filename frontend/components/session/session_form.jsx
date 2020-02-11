
import React from "react"
import { Redirect, Link} from "react-router-dom"

class SessionForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(attribute){
        return (e) => this.setState({[attribute]: e.currentTarget.value})
    }

    renderOtherLink(){
        let path = this.props.match.url.substring(1)

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
        this.props.submitForm(this.state).then(
            <Redirect to="/"/>
        )
    }

    render(){
        
        return(
            <div className="session-container">
                <img className="session-image" src={window.images.gram_phone} alt="gram screenshot displayed on phone"/>
                <div className="session-content">
                    <div className="session-content-1">
                        <img className="session-title" src={window.images.lotg}/>
                        <h2>Log in to see photos and videos from Middle Earth.</h2>
                        <form className="session-form" onSubmit={this.handleSubmit}>
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
                            <button>{this.props.formAction}</button>
                        </form>
                        <h2>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h2>
                    </div>
                    {this.renderOtherLink()}
                </div>
            </div>
        )
    }

}

export default SessionForm