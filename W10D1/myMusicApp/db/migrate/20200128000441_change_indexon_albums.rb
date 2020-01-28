class ChangeIndexonAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_index :albums, :band_id
    add_index :albums, [:title, :band_id], unique: true
  end
end
