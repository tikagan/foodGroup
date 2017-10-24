class CreateGroceries < ActiveRecord::Migration[5.1]
  def change
    create_table :groceries do |t|
      t.text :name

      t.timestamps
    end
  end
end
