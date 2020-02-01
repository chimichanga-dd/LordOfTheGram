
json.extract! user, :username, :id, :bio
json.picture user.picture_url || url_for(user.profile_pic)
json.posts user.posts