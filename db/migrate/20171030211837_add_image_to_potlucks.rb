class AddImageToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :image, :string
  end
end
