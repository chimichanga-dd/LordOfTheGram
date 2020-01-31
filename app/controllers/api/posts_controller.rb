
class Api::PostsController < ApplicationController

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit
    end

    def show
        post = Post.where(id: params[:id]).includes(:author).first
        @post = post
        render :show
    end

    def index
        posts = Post.order('created_at DESC') # newest at the top
        @posts = posts.includes(:author)
        render "api/posts/index"
    end

    def destroy
        post = Post.where(id: params[:id])
        @post = post.includes(:author).first
        if @post.destroy
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:description, :picture_url)
    end

end