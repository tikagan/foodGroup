class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :email
      t.string :firstname
      t.string :lastname
      t.string :picture

      t.timestamps
    end
  end
end
