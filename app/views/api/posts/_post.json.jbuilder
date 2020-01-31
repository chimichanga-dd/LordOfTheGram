json.extract! post, :description, :picture_url
json.author_id post.author.id
json.username post.author.username
json.user_picture_url post.author.picture_url
