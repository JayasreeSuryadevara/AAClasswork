class Artwork < ApplicationRecord
    validates :title, :artist_id, :image_url, presence: true
    validates :title, uniqueness: {scope: :artist_id}

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User
    
    has_one :viewer,
        primary_key: :id,
        foreign_key: :viewer_id,
        class_name: :ArtworkShare

    has_many :shared_viewers,
        through: :viewer,
        source: :shares
end
