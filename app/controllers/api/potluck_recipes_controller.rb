class Api::PotluckRecipesController < Api::ApplicationController
  before_action :set_potluck_recipe, only: [:show, :edit, :update, :destroy]

  # GET /potluck_recipes
  # GET /potluck_recipes.json
  def index
    @potluck_recipes = PotluckRecipe.all
  end

  # GET /potluck_recipes/1
  # GET /potluck_recipes/1.json
  def show
  end

  # GET /potluck_recipes/new
  def new
    @potluck_recipe = PotluckRecipe.new
  end

  # GET /potluck_recipes/1/edit
  def edit
  end

  # POST /potluck_recipes
  # POST /potluck_recipes.json
  def create
    @potluck_recipe = PotluckRecipe.new(potluck_recipe_params)
      if @potluck_recipe.save
        render json: {result: @potluck_recipe}
      else
        render json: { result: @potluck_recipe.errors, status: :unprocessable_entity }
      end
  end

  # PATCH/PUT /potluck_recipes/1
  # PATCH/PUT /potluck_recipes/1.json
  def update
    respond_to do |format|
      if @potluck_recipe.update(potluck_recipe_params)
        format.html { redirect_to @potluck_recipe, notice: 'Potluck recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @potluck_recipe }
      else
        format.html { render :edit }
        format.json { render json: @potluck_recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /potluck_recipes/1
  # DELETE /potluck_recipes/1.json
  def destroy
    @potluck_recipe.destroy
    respond_to do |format|
      format.html { redirect_to potluck_recipes_url, notice: 'Potluck recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_potluck_recipe
      @potluck_recipe = PotluckRecipe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def potluck_recipe_params
      params.require(:potluck_recipe, :potluck_id, :recipe_id)
    end
end
