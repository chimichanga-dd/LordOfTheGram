import React from "react"
import { Link } from "react-router-dom"

class Nav extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            searchValue: ""
        }
        this.updateSearch = this.updateSearch.bind(this)

        this.clearSearchValue = this.clearSearchValue.bind(this)
    }

    componentDidMount(){
        window.addEventListener("click", this.clearSearchValue)
    }

    componentDidUpdate(prevProps, prevState){
        let searchValue = this.state.searchValue
        if( searchValue.length > 0 && prevState.searchValue != searchValue){
            this.props.fetchUsers(searchValue)
        }

        if (searchValue.length == 0 && Object.keys(prevProps.searchMatches).length > 0){
            this.props.clearSearch()
        }
    }

    updateSearch(e){
        this.setState({searchValue: e.currentTarget.value})
    }

    clearSearchValue(){
        if (this.state.searchValue.length != 0)
            {
            this.setState({searchValue: ""})
        }
    }


    renderSearch(){
        let {searchMatches} = this.props
        searchMatches = Object.values(searchMatches)
       
        let results = searchMatches.map( (person) => {
            return (
                <a
                    className="search-link"
                    href={`#/users/${person.id}`}
                    key={person.id}
                >
                    <label className="search-link-person">
                        <img 
                            src={person.picture}
                            alt={`profile picture of ${person}`} 
                            height="50px" width="50px"/> {person.username}
                    </label>
                </a>
            )
        })

        return <div className="search-results">{results}</div>
    }



    render(){
        return (
            <nav>
                <Link to="/">Lord of the Gram</Link>
                <input 
                    type="text"
                    onChange={this.updateSearch}
                    value={this.state.searchValue}
                    placeholder="type here"
                />
                {this.renderSearch()}
                <Link to="/upload">Upload</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        )
    }
}

export default Nav