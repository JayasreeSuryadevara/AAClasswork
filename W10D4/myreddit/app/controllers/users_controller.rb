class UsersController < ApplicationController

  def index
    redirect_to subs_url
  end

  def show
    @user = User.find(params[:id])

    redirect_to user_url(@user.id)
  end

  def new
    @user = User.new
    
    render :new
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      flash[:messages] = "Created your user account successfully!"
      login(@user)
      redirect_to subs_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def destroy

  


  end

  def edit
    
  end

  def update

  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
