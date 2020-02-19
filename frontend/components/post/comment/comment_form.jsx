
import React from "react"

class CommentForm extends React.Component {

    constructor(props) {
        super(props)

        let { postId } = this.props

        this.state = {
            post_id: postId,
            text: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateAttribute(attribute) {
        return (e) => this.setState({ [attribute]: e.currentTarget.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(this.setState({ text: "" }))
    }

    render(){
        return(
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.updateAttribute("text")}
                    placeholder="Add a comment..."
                />
                <button className="bold" disabled={!this.state.text} type="submit">Post</button>
            </form>
        )
    }
}

export default CommentForm