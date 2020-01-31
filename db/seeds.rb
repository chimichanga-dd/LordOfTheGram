# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all


tammy = User.create(username: "TammyTester", password: "tester", bio: "this is my first gram account")
david = User.create(username: "DavidTester", password: "tester", bio: "huh ok?")

tammy.posts.create(description: "testPost", picture_url: "")
david.posts.create(description: "testPost", picture_url: "")

puts "Done seeding"