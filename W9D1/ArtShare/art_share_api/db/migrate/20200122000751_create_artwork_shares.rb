class CreateArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares do |t|
      t.interger :artwork_id, presence: true
      t.interger :viewer_id, presence: true
    end
    add_index :artwork_shares, :viewer_id
    add_index :artwork_shares, :artwork_id
  end
end
