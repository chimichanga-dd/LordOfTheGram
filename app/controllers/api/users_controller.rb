

class Api::UsersController < ApplicationController

    def create
        @user = User.create(user_params)
        if @user.save
            log_in(@user)
            render json: "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render json: "api/users/index"
    end

    def show
        @user = User.find(params[:id])
        render json: "api/users/show"
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render json: "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username,:password)
    end


end
