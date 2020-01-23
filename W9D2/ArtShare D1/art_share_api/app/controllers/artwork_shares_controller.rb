class ArtworkSharesController < ApplicationController

    def index
        render json: ArtworkShare.all
    end

    def create
        share = ArtworkShare.new(artwork_share_params)
        if share.save
            render json: share, status: 201
        else
            render json: share.errors.full_messages, status: 422
        end
    end

    def show
        share = ArtworkShare.find(params[:id])
        render json: share
    end

    def destroy
        share = ArtworkShare.find(params[:id])
        if share.destroy
            render json: share
        else
            render json: share.errors.full_messages, status: 422
        end
    end

    private
    def artwork_share_params
        params.require(:artwork_share).permit(:artwork_id, :viewer_id)
    end
end