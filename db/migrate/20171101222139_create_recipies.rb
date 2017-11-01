class CreateRecipies < ActiveRecord::Migration[5.1]
  def change
    create_table :recipies do |t|
      t.string :name
      t.string :description
      t.string :URI
    end
  end
end
