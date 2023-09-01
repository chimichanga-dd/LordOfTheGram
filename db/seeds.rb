# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

users = [{
  username: 'MemeLord',
  password: 'memer12',
  bio: 'Best memer on this side of Middle Earth',
  profile_pic_path: 'app/assets/images/seeds/9646468ni4mvx458amhp9r4coow2.jpg',
  profile_pic_name: '9646468ni4mvx458amhp9r4coow2.jpeg',
  profile_pic_content_type: 'image/jpeg',
  db_object: nil
}]

users.each do |user|
  # create user
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

posts = [{
  owner_id: 0,
  description: 'this is my first post',
  post_photo_path: 'app/assets/images/seeds/3oegk76k4i228y3pehpuxnv7k2b1.jpg',
  post_photo_name: '3oegk76k4i228y3pehpuxnv7k2b1.jpg',
  post_photo_content_type: 'image/jpeg'
}]

posts.each do |post|
  # create user
  owner_id = post[:owner_id]
  db_object = users[owner_id][:db_object]
  post_obj = db_object.posts.new(
    description: 'this is my first post'
  )
  post_obj.photo.attach(
    io: File.open(post[:post_photo_path]),
    filename: post[:post_photo_name],
    content_type: post[:post_photo_content_type],
    identify: false
  )

  post[:post_obj] = post_obj
end

puts 'Done seeding'
