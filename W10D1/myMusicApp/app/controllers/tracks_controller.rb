class TracksController < ApplicationController

    def new
        @track = Track.new
        render :new
    end

    def create
        @track = Track.find(track_params)
        if @track.save
            redirect_to albums_url(@track.album_id)
        else
            flash.now[:errors] = @track.errors.full_messages
            render :new
        end
    end

    def destroy
        @track = Track.find(track_params)
        album_id = @track.album_id
        @track.destroy!
        redirect_to albums_url(album_id)
    end

    private

    def track_params
        params.require(:track).permit(:id, :album_id, :title, :ord, :lyrics, :track_type)
    end

end
