class AddCreatorIdToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :creator_id, :bigint
    add_foreign_key :potlucks, :users, column: :creator_id, primary_key: 'id'
  end
end
