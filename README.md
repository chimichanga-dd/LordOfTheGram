# Lord of the Gram 
[Live Link](https://lord-of-the-gram.herokuapp.com/)

Lord of the Gram is a clone of the popular social media app - InstaGram. It features accounts and posts made by fictional characters from the Lord of the Rings book.


### Tech Stack

* Ruby on Rails, Active Record
* PostGres
* React, Redux
* Amazon Web Services

## User
* Require users to sign up or sign in before app usage, and log out when requested.
* After sucessful session creation, redirect to a feed consisting of posts made by followed users.
* Default profile icon and blank bio.

<img src="https://media.giphy.com/media/idLmv1QLEHzOY9ch6s/giphy.gif" alt="log in gif">

## Post
* Create a post consisting of an image and description (not required).
* Error handling to require that images be a JPG, JPEG or PNG.
* Delete your own posts

``` javascript
renderDeleteButton(commenterId, commentId) {
    if (this.props.currentUser == this.props.postOwnerId || this.props.currentUser == commenterId) {
        return <img className="button-remove"
                    src={window.images.remove}
                    onClick={ () => this.props.deleteComment(commentId)}
                />
    } else {
        return null
    }
}
```

<img src="https://media.giphy.com/media/TJygiTzAhFIIuN6p0d/giphy.gif" alt="post gif">

## Like and Comment
* Like any post (even your own) by double clicking the post or the heart icon
* Comment on any post (even your own).
* Remove comments made by any user on posts you create.
``` javascript
handleDoubleClick(){
    if (this.props.liked){
        this.props.deleteLike(this.props.post.id)
    } else {
        this.props.createLike({ post_id: this.props.post.id })
    }
}

renderLikeButton(){
    let likeButton
    if (this.props.liked){
        likeButton = <img
            className="like-button button-image"
            src={window.images.red_heart}
            onClick={() => this.props.deleteLike(this.props.post.id)}
        />
    } else {
        likeButton = <img
            className="like-button button-image"
            src={window.images.heart}
            onClick={() => this.props.createLike({ post_id: this.props.post.id })}
        />
    }
    return(
        <div className="button-row">
            {likeButton}
            <img className="button-image" src={window.images.comment} alt="non-functional comment button"/>
        </div>
    )
}
```

<img src="https://media.giphy.com/media/hoxblDs5EtO6iOAq66/giphy.gif" alt="like and comment gif">

## Following & Photo feed
* Follow or unfollow users to see their posts in your feed.
* Update feed to display/remove newly followed/unfollowed user posts
* Suggest up to 3 non-followed users

``` Ruby
# Posts Controller
def index
    posts = current_user.following_images.order('created_at DESC').limit(5).offset(params[:offset]) # newest at the top
    @posts = posts.includes(:author, :likes)
    render "api/posts/index"
end
 ```
 
 <img src="https://media.giphy.com/media/f3FipDw9vis8dqFZ5Z/giphy.gif" alt="feed gif">
 
 ``` Ruby
 #Users Controller
 def not_following
    filter = User.find_by(id: current_user.id).followings.ids
    if filter.length == 0
        @users = User.where.not(id: current_user.id).limit(3)
    else
        @users = User.where.not('id in (?)', filter).where.not(id: current_user.id).limit(3)
    end
    render "api/users/index"
end
 ```
 
<img src="https://media.giphy.com/media/d8cxpSamvA6kOm6JFy/giphy.gif" alt="follow gif">
