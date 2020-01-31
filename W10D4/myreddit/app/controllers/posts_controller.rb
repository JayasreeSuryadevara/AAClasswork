class PostsController < ApplicationController
before_action :is_author?, only: [:edit, :update, :destroy]


  def is_author?
    unless self.author_id == current_user.id
      flash.now[:errors] = ["You are not the author of this post"]
  end
  
  def show
    @post = Post.find(params[:id])
    redirect_to post_url(@post.id)
  end

  def new
    @post = Post.new
    render :new
  end

  def create
    ensure_logged_in
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    render :edit
  end

  def update
    ensure_logged_in
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    
    if @post.save
        redirect_to sub_url(@post.id)
    else
        flash.now[:errors] = @post.errors.full_messages
        render :edit
    end
  end

  def destroy
    ensure_logged_in
    @post = Post.find(params[:id])
    @post.destroy!
    redirect_to posts_url
  end

  private

  def sub_params
    params.require(:post).permit(:title, :url, :content, :sub_id)
  end

end
