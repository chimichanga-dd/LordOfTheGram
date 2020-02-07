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

tammy = User.create(username: "TammyTester", password: "tester", bio: "this is my first gram account")
david = User.create(username: "DavidTester", password: "tester", bio: "huh ok?")
stranger = User.create(username: "StrangerDanger", password: "tester", bio: "I'm a spooky stranger")

Follow.create(user_id: tammy.id, following_id: david.id)
Follow.create(user_id: stranger.id, following_id: david.id)
Follow.create(user_id: david.id, following_id: tammy.id)

p1 = tammy.posts.create(description: "lil b")
file1 = open("#{Rails.root}/app/assets/images/seed/t_1.jpg")
p1.photo.attach(io: file1, filename: "lilb.jpg")
david.comments.create(text: "wow that looks amazing", post_id: p1.id)
stranger.comments.create(text: "yum yum hun", post_id: p1.id)

p4 = tammy.posts.create(description: "check, chek, chiken")
file4 = open("#{Rails.root}/app/assets/images/seed/t_2.jpg")
p4.photo.attach(io: file4, filename: "chicken.jpg")

p3 = david.posts.create(description: "Rock-a-bye bb")
file3 = open("https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg")
p3.photo.attach(io: file3, filename: "rocks.jpg")
tammy.comments.create(text: "my rock better be bigger", post_id: p3.id)
stranger.comments.create(text: "nice rock", post_id: p3.id)


puts "Done seeding"