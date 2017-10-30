# not actually a pantry
class Pantry < ApplicationRecord
  belongs_to :ingredient
  belongs_to :user
end
