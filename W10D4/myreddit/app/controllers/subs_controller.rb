class SubsController < ApplicationController
  before_action :is_moderator?, only: [:edit, :update, :destroy]


  def is_moderator?
    unless self.moderator_id == current_user.id
      flash.now[:errors] = ["You are not the moderator of this sub"]
    end
  end

  def index
    @subs = Sub.all
    render :index
  end

  def show
    @sub = Sub.find(params[:id])
    redirect_to sub_url(@sub.id)
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    ensure_logged_in?
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id

    if @sub.save
      redirect_to sub_url(@sub.id)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    render :edit
  end

  def update
    ensure_logged_in
    @sub = Sub.find(params[:id])
    @sub.update_attributes(sub_params)
    
    if @sub.save
        redirect_to sub_url(@sub.id)
    else
        flash.now[:errors] = @sub.errors.full_messages
        render :edit
    end
  end

  def destroy
    ensure_logged_in
    @sub = Sub.find(params[:id])
    @sub.destroy!
    redirect_to subs_url
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

end
