class BandsController < ApplicationController

    def index
        @bands = Band.all
        render :index
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to 'bands#index'
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end

    def new
        @band = Band.new
        render :new
    end

    def edit
        @band = Band.find(band_params)
        render :edit
    end

    def update
        @band = Band.find(params[:id])
        if @band.update(band_params)
            redirect_to 'bands#index'
        else
           flash.now[:errors] = @band.errors.full_messages
            render :edit
        end
    end

    def destroy
        @band = Band.find(band_params)
        @band.destroy!
        render :index
    end

    private

    def band_params
        params.require(:band).permit(:id, :name)
    end

end
