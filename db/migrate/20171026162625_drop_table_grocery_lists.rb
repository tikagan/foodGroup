class DropTableGroceryLists < ActiveRecord::Migration[5.1]
  def change
    drop_table :grocery_lists
  end
end
