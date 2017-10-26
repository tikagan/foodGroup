class Api::IngredientsController < Api::ApplicationController

  def create(name)
    i = Ingredient.new
    i.name = name
  end

end
