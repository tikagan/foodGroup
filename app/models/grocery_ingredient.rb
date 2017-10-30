class GroceryIngredient < ApplicationRecord
  belongs_to :grocery
  belongs_to :ingredient
end
