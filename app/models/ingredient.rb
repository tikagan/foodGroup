class Ingredient < ApplicationRecord
  has_many :grocery_list
  has_many :pantry

  validate_uniqueness_of :name

end
