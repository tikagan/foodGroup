class GroceryList < ApplicationRecord
  belongs_to :ingredient
  belongs_to :user

  def create
    grocery_list = GroceryList.new(grocery_list_params)

  end

  private
  def grocery_list_params
    params.require(:user_id, :ingredient_id).permit(:quantity, :unit)
  end

end
