# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative './seeds/users'
require_relative './seeds/posts'
require_relative './seeds/follows'

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(User.table_name)
Post.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Post.table_name)
Follow.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Follow.table_name)
Like.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Like.table_name)
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Comment.table_name)

users = @users
posts = @posts

users.each do |user|
  db_object = User.create(
    username: user[:username],
    password: user[:password],
    bio: user[:bio]
  )
  db_object.profile_pic.attach(
    io: File.open(user[:profile_pic_path]),
    filename: user[:profile_pic_name],
    content_type: user[:profile_pic_content_type],
    identify: false
  )
  user[:db_object] = db_object
end

posts.shuffle.each do |post|
  owner_id = post[:owner_id]
  db_object = users[owner_id][:db_object]
  post_obj = db_object.posts.new(
    description: post[:description]
  )
  post_obj.photo.attach(
    io: File.open(post[:post_photo_path]),
    filename: post[:post_photo_name],
    content_type: post[:post_photo_content_type],
    identify: false
  )

  post_obj.save
  post[:post_obj] = post_obj
end

@follows.each do |follow|
  follow[:following_ids].each do |id_to_follow|
    new_follow = Follow.new(following_id: id_to_follow)
    new_follow.user_id = follow[:user_id]
    new_follow.save
  end
end

puts 'Done seeding'
