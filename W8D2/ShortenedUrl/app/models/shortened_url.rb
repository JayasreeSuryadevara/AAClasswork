# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer          not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class ShortenedUrl < ApplicationRecord
    validates :long_url, :short_url, presence:true, uniqueness: true

    belongs_to :submitter,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

    has_many :short_urls,
    class_name: 'Visit',
    foreign_key: :shortened_url_id,
    primary_key: :id


    def self.random_code
        rand_str = SecureRandom.urlsafe_base64
        until !self.exists?(rand_str)
            rand_str = SecureRandom.urlsafe_base64
        end
        rand_str
    end
    
    def self.shorten_url(user, long)
        ShortenedUrl.create!(long_url: long, short_url: self.random_code, user_id: user.id)
    end

end
