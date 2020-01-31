
@posts.each do |indvidual_post|
    json.set! indvidual_post.id do
        json.partial! "api/posts/post", post: indvidual_post
    end
end