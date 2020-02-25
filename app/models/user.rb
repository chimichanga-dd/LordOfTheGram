
require "open-uri"

class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_one_attached :profile_pic

    has_many :posts, class_name: :Post, primary_key: :id, foreign_key: :user_id, dependent: :destroy
    has_many :likes, class_name: :Like, primary_key: :id, foreign_key: :user_id, dependent: :destroy
    has_many :comments, class_name: :Comment, primary_key: :id, foreign_key: :user_id, dependent: :destroy


    has_many :follows, dependent: :destroy
    has_many :follower_relationships, foreign_key: :following_id, class_name: :Follow, dependent: :destroy
    has_many :followers, through: :follower_relationships, source: :follower

    has_many :following_relationships, foreign_key: :user_id, class_name: :Follow, dependent: :destroy
    has_many :followings, through: :following_relationships, source: :following
    has_many :following_images, through: :followings, source: :posts

    after_initialize :ensure_session_token, :load_profile_picture

    
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token
        generate_unique_session_token
        save!
        self.session_token
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

    def load_profile_picture
        unless self.profile_pic.attached?
            file = open("#{Rails.root}/app/assets/images/default_pic.png")
            self.profile_pic.attach(io: file, filename: "default_picture.png")
        end
    end

end