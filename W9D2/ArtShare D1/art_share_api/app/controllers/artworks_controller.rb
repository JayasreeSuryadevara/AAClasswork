class ArtworksController < ApplicationController

    def index 
        if params[:user_id]
            artworks = Artwork.where(artist_id: params[:user_id]).limit(5)
        else
            artworks = Artwork.all
        end
        render json: artworks
    end

    def create 
        art = Artwork.new(artwork_params)
        if art.save
            render json: art, status: 201
        else
            render json: art.errors.full_messages, status: 422
        end
    end

    def show
        render json: Artwork.find(params[:id])
    end

    def destroy
        art = Artwork.find(params[:id])
        if art.destroy
            head :ok
        else
            render json: art.errors.full_messages, status: 422
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title,:artist_id,:image_url)
    end
end
