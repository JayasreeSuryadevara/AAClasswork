class UsersController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            redirect_to bands_url
        else
            flash.now[:errors] = "Email address already exists!"
            render :new
        end

    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy!
        redirect_to bands_url
    end

    private

    def user_params
        params.require(:user).permit(:id, :email, :password)
    end
    
end
