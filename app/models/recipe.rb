class Recipe < ApplicationRecord
  has_many :potlucks, through: :potluck_recipes
end
