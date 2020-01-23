class FavoritesController < ApplicationController
    def index
        if params[:user_id]
            favs = Favorite.where(user_id: params[:user_id])
        elsif params[:artwork_id]
            favs = Favorite.where(artwork_id: params[:artwork_id])
        else
            favs = Favorite.all
        end
        render json: favs
    end
end
