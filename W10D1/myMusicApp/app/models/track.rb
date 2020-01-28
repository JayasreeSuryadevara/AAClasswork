class Track < ApplicationRecord
    validates :ord, uniqueness: { scope: :album_id }
    validates :track_type, presence: true, inclusion: { in: ["regular","bonus"]}

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album

end
