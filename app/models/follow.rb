

class Follow < ApplicationRecord

    belongs_to :follower, class_name: :User, primary_key: :id, foreign_key: :user_id
    belongs_to :following, class_name: :User, primary_key: :id, foreign_key: :following_id

end