class Ingredient < ApplicationRecord
  has_many :grocery_list
  has_many :pantry

  validates_uniqueness_of :name

  def create
    ing = Ingredient.new(ingredient_params)
    if !ing
      ing.save!
    end
  end

  private
  def ingredient_params
    params.require(:name)
  end

end
