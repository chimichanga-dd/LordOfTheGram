
json.extract! comment, :id, :user_id, :post_id, :text
json.user comment.user.username
json.receiver comment.receiver.id
