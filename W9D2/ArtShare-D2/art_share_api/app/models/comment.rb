# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  artwork_id :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :user_id, :artwork_id, presence: true
    
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User,
        dependent: :destroy

    belongs_to :artwork,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Artwork,
        dependent: :destroy

    has_many :likes,
        as: :likeable
end
