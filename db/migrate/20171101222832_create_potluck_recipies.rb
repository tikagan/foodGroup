class CreatePotluckRecipies < ActiveRecord::Migration[5.1]
  def change
    create_table :potluck_recipies do |t|
      t.references :potlucks, foreign_key: true
      t.references :recipies, foreign_key: true
    end
  end
end
