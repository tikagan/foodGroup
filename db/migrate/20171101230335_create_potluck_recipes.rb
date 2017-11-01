class CreatePotluckRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :potluck_recipes do |t|
      t.references :potlucks
      t.references :recipes

      t.timestamps
    end
  end
end
