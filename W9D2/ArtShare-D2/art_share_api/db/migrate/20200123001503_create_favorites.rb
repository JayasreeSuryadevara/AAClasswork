class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :artwork_id, null: false
      t.timestamps

      t.index [:user_id, :artwork_id]
    end
  end
end
