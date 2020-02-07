json.extract! post, :description, :id
json.photo_url url_for(post.photo)
json.author_id post.author.id
json.username post.author.username
json.user_picture_url url_for(post.author.profile_pic)
json.likers post.liking_users.pluck(:id)

json.comments do
    post.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :user_id, :post_id, :text
            json.user comment.user.username
            json.user_photo url_for(comment.user.profile_pic)
        end
    end
end