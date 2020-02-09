
json.extract! comment, :id, :user_id, :post_id, :text
json.user comment.user.username
json.user_photo url_for(comment.user.profile_pic)
json.receiver comment.receiver.id
