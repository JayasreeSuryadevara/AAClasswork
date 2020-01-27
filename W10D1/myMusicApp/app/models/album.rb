class Album < ApplicationRecord
    validates :title, :year, :band_id, presence: true
    validates :year, numericality: { minimum: 1900, maximum: 3000 }
    validates :live, inclusion: { in: [true, false] }

    belongs_to :band,
        primary_key: :id,
        foreign_key: :band_id,
        class_name: :Band

    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track
        
end
