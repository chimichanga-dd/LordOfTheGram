json.extract! post, :description, :picture_url
json.username post.author.username
json.user_picture_url post.author.picture_url
