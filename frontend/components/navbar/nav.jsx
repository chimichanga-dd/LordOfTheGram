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

        if (results.length > 0){
            return (
                <div className="search-container">
                    <div className="up-arrow"></div>
                    <div className="search-results">{results}</div>
                </div>
            )
        } else {
            return null
        }
    }



    render(){
        return (
            <nav>
                <div className="nav-content">
                    <Link to="/"><img className="nav-logo" src={window.images.logo} alt="feed page link" /></Link>
                    <input
                        type="text"
                        className="nav-search"
                        onChange={this.updateSearch}
                        value={this.state.searchValue}
                        placeholder="search"
                    />
                    {this.renderSearch()}
                    <div className="nav-right-icons">
                        <Link to="/upload"><img className="nav-upload" src={window.images.upload} alt="upload page link" /></Link>
                        <Link to="/profile"><img className="nav-profile" src={window.images.profile} alt="profile page link" /></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav