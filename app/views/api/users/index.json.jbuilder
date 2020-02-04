@users.each do |user|
    json.set! user.username do
        json.extract! user, :id, :username
        json.picture user.picture_url || url_for(user.profile_pic)
    end
end