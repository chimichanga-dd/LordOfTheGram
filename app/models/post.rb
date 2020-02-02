

class Post < ApplicationRecord

    belongs_to :author, class_name: :User, primary_key: :id, foreign_key: :user_id
    has_one_attached :photo
    
end