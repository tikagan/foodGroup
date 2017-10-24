class Ingredient < ApplicationRecord
  has_many :grocery_list
  has_many :pantry

  validate_uniqueness_of :name

  def create
    ing = Ingredient.new
  end

  private
  def ingredient_params
    params.require(:ingredent)
  end

end
