class GroceryList < ApplicationRecord
  belongs_to :user
  has_many :grocery_ingredients

  def create
    grocery_list = GroceryList.new(grocery_list_params)
  end

  private
  def grocery_list_params
    params.require(:user_id, :name).permit(:description)
  end

end
