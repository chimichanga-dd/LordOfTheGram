

class Post < ApplicationRecord

    belongs_to :author, class_name: :User, primary_key: :id, foreign_key: :user_id
    has_many :likes, class_name: :Like, primary_key: :id, foreign_key: :post_id
    has_many :liking_users, through: :likes, source: :user
    has_many :comments, class_name: :Comment, primary_key: :id, foreign_key: :post_id

    has_one_attached :photo
    
end