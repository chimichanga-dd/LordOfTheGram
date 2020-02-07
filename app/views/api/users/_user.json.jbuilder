
json.extract! user, :username, :id, :bio
json.picture url_for(user.profile_pic)

json.posts do
    user.posts.each do |indvidual_post|
        json.set! indvidual_post.id do
            json.extract! indvidual_post, :description
            json.photo_url url_for(indvidual_post.photo)
            json.author_id indvidual_post.author.id
            json.username indvidual_post.author.username
            json.user_picture_url url_for(indvidual_post.author.profile_pic)
            json.likers indvidual_post.liking_users.pluck(:id)
        end
    end
end

json.followers user.followers.pluck(:id)
json.following user.followings.pluck(:id)
