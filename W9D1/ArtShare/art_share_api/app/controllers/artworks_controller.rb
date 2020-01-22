class ArtworksController < ApplicationController

    def index 
        artworks = Artwork.all
        render json: artworks
    end

    def create 
        art = Artwork.new(artwork_params)
        if art.save
            render json: art
        else
             render json: art.errors.full_messages, status: 422
        end
    end


    private

    def artwork_params
        params.require(:artwork).permit(:title,:artist_id,:image_url)
    end
end
