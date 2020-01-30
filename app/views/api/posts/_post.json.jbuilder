
json.extract! post, :description, :photo_url
json.username post.user.username
json.user_picture_url post.user.picture_url
