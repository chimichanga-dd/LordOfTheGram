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


tammy = User.create(username: "TammyTester", password: "tester", bio: "this is my first gram account")
david = User.create(username: "DavidTester", password: "tester", bio: "huh ok?")

p1 = tammy.posts.create(description: "BTS", picture_url: "https://images.pexels.com/photos/3584928/pexels-photo-3584928.jpeg")
file1 = open("https://images.pexels.com/photos/3584928/pexels-photo-3584928.jpeg")
p1.photo.attach(io: file1, filename: "bts.jpg")

p2 = tammy.posts.create(description: "Spin to win baybay", picture_url: "https://images.pexels.com/photos/1820148/pexels-photo-1820148.jpeg")
file2 = open("https://images.pexels.com/photos/1820148/pexels-photo-1820148.jpeg")
p2.photo.attach(io: file2, filename: "dancer.jpg")

p3 = david.posts.create(description: "Rock-a-bye bbb", picture_url: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg")
file3 = open("https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg")
p3.photo.attach(io: file3, filename: "rocks.jpg")


puts "Done seeding"