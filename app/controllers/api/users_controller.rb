

class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            log_in(@user)
            puts("entered")
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.where("lower(username) LIKE ?","%#{params[:userFilter].downcase}%")
        render "api/users/index"
    end

    def show
        @user = User.where(id: params[:id]).includes(:posts).first
    end

    def update
        @user = User.where(id: current_user.id).includes(:posts).first
        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def not_following
        filter = User.find_by(id: current_user.id).followings.ids
        if filter.length == 0
            @users = User.where.not(id: current_user.id).limit(3)
        else
            @users = User.where.not('id in (?)', filter).where.not(id: current_user.id).limit(3)
        end
        render "api/users/index"
    end

    private

    def user_params
        params.require(:user).permit(:username,:password,:bio, :profile_pic)
    end


end
