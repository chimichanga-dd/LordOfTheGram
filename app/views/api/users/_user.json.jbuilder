
json.extract! user, :username, :id, :bio
json.picture user.picture_url || url_for(user.profile_pic)

json.posts do
    user.posts.each do |indvidual_post|
        json.set! indvidual_post.id do
            json.extract! indvidual_post, :description
            json.photo_url url_for(indvidual_post.photo) || indvidual_post.picture_url
            json.author_id indvidual_post.author.id
            json.username indvidual_post.author.username
            json.user_picture_url indvidual_post.author.picture_url
        end
    end
end