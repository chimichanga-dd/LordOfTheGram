
import React from "react"
import { Link } from "react-router-dom"


class FeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {post, key} = this.props

        return (
            <ul className="index-item" key={`index-item-${key}`}>
                <li className="item-info" key={`author-id-${key}`}>
                    < Link to={`users/${post.author_id}`}>{post.username}</Link>
                </li>
                <li className="item-info" key={`photo-${key}`}>
                    <img src={post.photo_url} width="200" height="200" />
                </li>
                <li className="item-info" key={`description-${key}`}>
                    {post.description}
                </li>
            </ul>
        )
    }

}

export default FeedItem;