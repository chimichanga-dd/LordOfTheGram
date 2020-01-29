
import React from "react"

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
        (e) => this.setState({[attribute]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submitForm(this.state).then(console.log("submitted"))
    }

    render(){
        
        return(
            <form className="session-form" onSubmit="">
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
        )
    }

}

export default SessionForm