class Api::PantriesController < Api::ApplicationController
  before_action :set_pantry, only: [:show, :edit, :update, :destroy]

    # GET /pantries/1
    # GET /pantries/1.json
    def show
      @user = current_user
      @usersIngredients = @user.ingredients
      @allIngredients = Ingredient.all

      render json: {result: @usersIngredients, all: @allIngredients, user: @user}
    end

    # POST /pantries
    # POST /pantries.json
    def create
      @pantry = Pantry.new(pantry_params)


        if @pantry.save
          render json: {result: @pantry}
        else
          render json: { result: @pantry.errors, status: :unprocessable_entity }
        end

    end

    # PATCH/PUT /pantries/1
    # PATCH/PUT /pantries/1.json
    def update
      respond_to do |format|
        if @pantry.update(pantry_params)

          format.json { render :show, status: :ok, location: @pantry }
        else

          format.json { render json: @pantry.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /pantries/1
    # DELETE /pantries/1.json
    def destroy

      @delete = Pantry.find_by_ingredient_id params[:ingredient_id]

      if @delete.destroy
        render json: { result: @delete }
      else
        format.json { render json: @delete.errors, status: :unprocessable_entity }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_pantry
        @pantry = Pantry.where(user_id: params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def pantry_params
        params.require(:pantry).permit(:ingredient_id, :user_id, :quantity, :unit)
      end
end
