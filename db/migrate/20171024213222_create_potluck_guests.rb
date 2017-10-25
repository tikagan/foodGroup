class CreatePotluckGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :potluck_guests do |t|
      t.references :potluck, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
