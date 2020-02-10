
import React from "react"
import { Redirect } from "react-router-dom"

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

    handleSubmit(e){
        e.preventDefault()
        this.props.submitForm(this.state).then(
            <Redirect to="/"/>
        )
    }

    render(){
        
        return(
            <div>
                <img src={window.images.gram_phone} alt="gram screenshot displayed on phone"/>
                <form className="session-form" onSubmit={this.handleSubmit}>
                {this.props.errors.map((error,idx) => (<div key={`error-${idx+1}`} className="error">{error}</div>))}
                    <label htmlFor="session-form-username">Username: </label>
                    <input 
                        type="text"
                        id="session-form-username"
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                    /><br/>
                    <label htmlFor="session-form-password">Password: </label>
                    <input
                        type="password"
                        id="session-form-password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <button>{this.props.formAction}</button>
                </form>
            </div>
        )
    }

}

export default SessionForm