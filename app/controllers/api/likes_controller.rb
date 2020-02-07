

class Api::LikesController < ApplicationController

    def create
        @like = current_user.likes.new(like_params)
        if @like.save
            render "api/likes/show"
        end
    end

    def destroy
        @like = current_user.likes.where(post_id: params[:id]).first
        if @like.destroy
            render "api/likes/show"
        end
    end

    def like_params
        params.require(:like).permit(:post_id)
    end

end