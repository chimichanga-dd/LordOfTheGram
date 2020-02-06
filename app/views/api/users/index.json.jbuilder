@users.each do |user|
    json.set! user.username do
        json.extract! user, :id, :username
        json.picture url_for(user.profile_pic)
    end
end