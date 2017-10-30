class Api::IngredientsController < Api::ApplicationController

  def create
    @i = Ingredient.new(ingredient_params)
    
    if @i.save
      render json: {result: @i}
    else
      render json: { result: @i.errors, status: :unprocessable_entity }
    end

  end

  private
  def ingredient_params
    params.require(:ingredient).permit(:name)
  end

end
