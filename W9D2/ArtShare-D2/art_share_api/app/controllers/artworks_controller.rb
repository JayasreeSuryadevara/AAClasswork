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

    def like
        like = Like.new(likeable_id: params[:id],likeable_type: :Artwork, user_id: params[:user_id])
        if like.save
            render json: like
        else 
            render json: like.errors.full_messages
        end
    end

    def unlike
        unlike = Like.where(likeable_id: params[:id]).where(likeable_type: :Artwork).where(user_id: params[:user_id])
        unlike.first.destroy
        render json: unlike
    end

    def favorite
        fav = Favorite.new(user_id: params[:user_id], artwork_id: params[:id])
        if fav.save
            render json: fav
        else 
            render json: fav.errors.full_messages
        end
    end

    def unfavorite
        fav = Favorite.where(user_id: params[:user_id]).where(artwork_id: params[:id])
        fav.first.destroy
        render json: fav
    end

    private
    def artwork_params
        params.require(:artwork).permit(:title,:artist_id,:image_url)
    end
end
