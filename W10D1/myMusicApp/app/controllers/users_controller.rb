class UsersController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end

    def create
        user = User.new(user_params)

        if user.save
            # redirect_to music_url
        else
            flash.now[:errors] = "Email address already exists!"
            render :new
        end

    end

    def destroy

    end

    private

    def user_params
        params.require(:user).permit(:id, :email, :password)
    end
    
end
