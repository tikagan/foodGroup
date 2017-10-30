class GroceryIngredientsController < ApplicationController
  before_action :set_grocery_ingredient, only: [:show, :edit, :update, :destroy]

  # GET /grocery_ingredients
  # GET /grocery_ingredients.json
  def index
    @grocery_ingredients = GroceryIngredient.all
  end

  # GET /grocery_ingredients/new
  def new
    @grocery_ingredient = GroceryIngredient.new
  end

  # GET /grocery_ingredients/1/edit
  def edit
  end

  # POST /grocery_ingredients
  # POST /grocery_ingredients.json
  def create
    @grocery_ingredient = GroceryIngredient.new(grocery_ingredient_params)

    respond_to do |format|
      if @grocery_ingredient.save
        format.html { redirect_to @grocery_ingredient, notice: 'Grocery ingredient was successfully created.' }
        format.json { render :show, status: :created, location: @grocery_ingredient }
      else
        format.html { render :new }
        format.json { render json: @grocery_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /grocery_ingredients/1
  # PATCH/PUT /grocery_ingredients/1.json
  def update
    respond_to do |format|
      if @grocery_ingredient.update(grocery_ingredient_params)
        format.html { redirect_to @grocery_ingredient, notice: 'Grocery ingredient was successfully updated.' }
        format.json { render :show, status: :ok, location: @grocery_ingredient }
      else
        format.html { render :edit }
        format.json { render json: @grocery_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /grocery_ingredients/1
  # DELETE /grocery_ingredients/1.json
  def destroy
    @grocery_ingredient.destroy
    respond_to do |format|
      format.html { redirect_to grocery_ingredients_url, notice: 'Grocery ingredient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery_ingredient
      @grocery_ingredient = GroceryIngredient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def grocery_ingredient_params
      params.fetch(:grocery_ingredient, {})
    end
end
