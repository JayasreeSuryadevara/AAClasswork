class CommentsController < ApplicationController
    
    def index
        if params[:user_id]
            comment = Comment.where(user_id: params[:user_id])
            render json: comment
        elsif params[:artwork_id]
            comment = Comment.where(artwork_id: params[:artwork_id])
            render json: comment
        else
            render json: Comment.all
        end
    end

    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        render json: comment
    end

    def like
        like = Like.new(likeable_id: params[:id],likeable_type: :Comment, user_id: params[:user_id])
        if like.save
            render json: like
        else 
            render json: like.errors.full_messages
        end
    end

    def unlike
        unlike = Like.where(likeable_id: params[:id]).where(likeable_type: :Comment).where(user_id: params[:user_id])
        unlike.first.destroy
        render json: unlike
    end

    private
    def comment_params
        params.require(:comment).permit(:artwork_id, :user_id)
    end

end
