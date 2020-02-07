
class Api::CommentsController < ApplicationController

    
    def index
        @comments = Comment.where(post_id: params[:post_id])
        render "api/comments/index"
    end
    
    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def comment_params
        params.require(:comment).permit(:user_id, :post_id, :text)
    end


end