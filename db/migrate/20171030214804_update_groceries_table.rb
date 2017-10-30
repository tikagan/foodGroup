class UpdateGroceriesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :groceries, :description, :string
    remove_column :groceries, :ingredient_id, :integer
    remove_column :groceries, :quantity, :integer
    remove_column :groceries, :unit, :string
  end
end
