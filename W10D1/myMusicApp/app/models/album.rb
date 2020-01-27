class Album < ApplicationRecord
    validates :title, :year, :band_id, presence: true
    validates :year, numericality: { :greater_than 1900 :less_than 3000 }
    validates :live, inclusion: { in: [true, false] }
end
