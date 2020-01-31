
require "open-uri"

class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_one_attached :profile_pic

    has_many :posts, class_name: :Post, primary_key: :id, foreign_key: :user_id

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
        file = open("https://doc-0c-2s-docs.googleusercontent.com/docs/securesc/frgche240lu28oub0781ngb8hsseqeli/61o9d4qfuk041j4ohvtlj4kjjbgc3hf7/1580508000000/07389640897004928882/05818598273454109837/1KLJsBBO_C6e9ZPkn_5OJnlFa3sXxK_is?authuser=1")
        self.profile_pic.attach(io: file, filename: (new_session_token + ".jpg"))
    end

end