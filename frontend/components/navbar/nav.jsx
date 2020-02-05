import React from "react"
import { Link } from "react-router-dom"

class Nav extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            searchValue: ""
        }
        this.updateSearch = this.updateSearch.bind(this)
    }


    componentDidUpdate(prevProps, prevState){
        let searchValue = this.state.searchValue
        if( searchValue.length > 0 && prevState.searchValue != searchValue){
            this.props.fetchUsers(searchValue)
        }
        
        if (searchValue.length == 0 & prevProps.searchMatches.length > 0){
            this.props.clearSearch()
        }
    }

    updateSearch(e){
        this.setState({searchValue: e.currentTarget.value})
    }

    render(){
        let {currentUser} = this.props
        return (
            <nav>
                Welcome, {currentUser.username}

                <input 
                    type="text"
                    onChange={this.updateSearch}
                    value={this.state.searchValue}
                    placeholder="type here"
                />

                <button onClick={this.logout}>Logout!</button>
            </nav>
        )
    }
}

export default Nav