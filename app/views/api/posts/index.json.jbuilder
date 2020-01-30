
@posts.each do |post|
    json.set! post.id do
        json.partial! "api/posts/post", user: @user
    end
end