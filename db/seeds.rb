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



puts "Done seeding"