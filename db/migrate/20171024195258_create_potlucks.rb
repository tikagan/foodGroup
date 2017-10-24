class CreatePotlucks < ActiveRecord::Migration[5.1]
  def change
    create_table :potlucks do |t|
      t.text :name

      t.timestamps
    end
  end
end
