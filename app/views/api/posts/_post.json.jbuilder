json.extract! post, :description
json.photo_url url_for(post.photo)
json.author_id post.author.id
json.username post.author.username
json.user_picture_url url_for(post.author.profile_pic)
