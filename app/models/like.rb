

class Like < ApplicationRecord

    belongs_to :post, class_name: :Post, primary_key: :id, foreign_key: :post_id
    belongs_to :user, class_name: :User, primary_key: :id, foreign_key: :user_id

    has_one :receiver, through: :post, source: :author

end