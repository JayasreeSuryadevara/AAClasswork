class AddIndexToVisit < ActiveRecord::Migration[5.2]
  def change
    add_index(:visits, :user_id, unique:true)
    add_index(:visits, :shortened_url_id, unique:true)
  end
end
