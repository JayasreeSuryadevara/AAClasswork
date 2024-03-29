class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table  :tracks do |t|
      t.integer   :album_id, null: false
      t.string    :title, null: false
      t.integer   :ord, null: false
      t.text      :lyrics
      t.string    :track_type, null: false, inclusion: { in: ["regular","bonus"]}, default: "regular"

      t.timestamps
    end
    add_index :tracks, :album_id, unique: true
    add_index :tracks, :id
  end
end
