class EditGroceriesIngredientsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :grocery_ingredients, :user_id, :integer
    add_column :grocery_ingredients, :grocery_id, :bigint
    add_foreign_key :grocery_ingredients, :groceries
  end
end
