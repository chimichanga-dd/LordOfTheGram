
import React from "react"
import { withRouter } from "react-router-dom"


class IndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {post} = this.props

        return (
            <ul className="index-item">
                <li className="item-info">
                    {post.username}
                </li>
                <li className="item-info">
                    <img src={post.picture_url} width="200" height="200" />
                </li>
                <li className="item-info">
                    {post.description}
                </li>
            </ul>
        )
    }

}

export default withRouter(IndexItem);