@users.each do |user|
    json.partial! 'users/user', user: user
end