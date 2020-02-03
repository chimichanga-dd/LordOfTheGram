

class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)
        @follow.user_id = current_user.id
        @follow.save
        render "api/follows/show"
    end

    def destroy
        @follow = Follow.find_by(user_id: current_user.id, following_id: params[:id])
        @follow.destroy
        render "api/follows/show"
    end

    def follow_params
        params.require(:follow).permit(:following_id)
    end

end