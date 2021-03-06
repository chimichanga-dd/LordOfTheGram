
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
        post = Post.where(id: params[:id]).includes(:author, :likes).first
        @post = post
        render :show
    end

    def index
        posts = current_user.following_images.order('created_at DESC').limit(5).offset(params[:offset]) # newest at the top
        @posts = posts.includes(:author, :likes)
        render "api/posts/index"
    end

    def destroy
        post = Post.where(id: params[:id])
        @post = post.includes(:author, :likes).first
        if @post.destroy
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:description, :photo)
    end

end