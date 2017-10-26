class ChangeGroceries < ActiveRecord::Migration[5.1]
  def change
    add_column :groceries, :ingredient_id, :bigint
    add_foreign_key :groceries, :ingredients
    add_column :groceries, :user_id, :bigint
    add_foreign_key :groceries, :users
    add_column :groceries, :quantity, :integer
    add_column :groceries, :unit, :string
  end
end
