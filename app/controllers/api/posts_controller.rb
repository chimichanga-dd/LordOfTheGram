
class Api::PostsController < ApplicationController

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit
    end

    def show
        @post = Post.find(params[:id]))
        render :show
    end

    def index
        @posts = Post.order('created_at DESC') # newest at the top
        render :index
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:description, :picture_url)
    end

end