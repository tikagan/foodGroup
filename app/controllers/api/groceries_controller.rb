class Api::GroceriesController < Api::ApplicationController
  before_action :set_grocery, only: [:show, :edit, :update, :destroy]

  # GET /groceries
  # GET /groceries.json
  def index
    @user = current_user
    @groceries = Grocery.all
    render json: { result: @groceries, user: @user }
  end

  # GET /groceries/1
  # GET /groceries/1.json
  def show
    @groceries = Grocery.find_by_id params[:id]
  end


  # POST /groceries
  # POST /groceries.json
  def create
    @grocery = Grocery.new(grocery_params)
    @allGroceries = Grocery.all

      if @grocery.save
        render json: { result: @allGroceries }
      else
        render json: { result: @grocery.errors, status: :unprocessable_entity }
      end
  end

  # PATCH/PUT /groceries/1
  # PATCH/PUT /groceries/1.json
  def update
      if @grocery.update(grocery_params)
        format.json { render :show, status: :ok, location: @grocery }
      else
        format.json { render json: @grocery.errors, status: :unprocessable_entity }
      end
  end

  # DELETE /groceries/1
  # DELETE /groceries/1.json
  def destroy
    if @grocery.destroy
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      @grocery = Grocery.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.

    def grocery_params
      params.permit(:user_id, :name, :description)
    end
end
