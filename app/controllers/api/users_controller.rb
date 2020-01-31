

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
        @users = User.all
        render "api/users/index"
    end

    def show
        @user = User.where(id: params[:id]).includes(:posts).first
        render "api/users/show"
    end

    def update
        @user = User.where(id: params[:id]).includes(:posts).first
        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username,:password)
    end


end
