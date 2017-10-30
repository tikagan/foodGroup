class CreateGroceryIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :grocery_ingredients do |t|
      t.references :ingredient, foreign_key: true
      t.references :user, foreign_key: true
      t.float :quantity

      t.timestamps
    end
  end
end
