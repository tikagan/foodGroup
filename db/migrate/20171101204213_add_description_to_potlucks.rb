class AddDescriptionToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :description, :string
  end
end
