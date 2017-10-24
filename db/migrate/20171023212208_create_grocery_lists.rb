class CreateGroceryLists < ActiveRecord::Migration[5.1]
  def change
    create_table :grocery_lists do |t|
      t.references :ingredient, foreign_key: true
      t.references :user, foreign_key: true
      t.float :quantity
      t.string :unit

      t.timestamps
    end
  end
end
