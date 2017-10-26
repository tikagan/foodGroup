class Api::PantriesController < Api::ApplicationController
  before_action :set_pantry, only: [:show, :edit, :update, :destroy]


    # GET /pantry
    # GET /pantryjson
    def show
      @user = current_user
      @ingredients = @user.ingredients
    end

    # POST /pantries
    # POST /pantries.json
    def create
      @pantry = Pantry.new(pantry_params)

      respond_to do |format|
        if @pantry.save
          format.json { render :show, status: :created, location: @pantry }
        else
          format.json { render json: @pantry.errors, status: :unprocessable_entity }
        end
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
      @pantry.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_pantry
        @pantry = Pantry.where(user_id: params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def pantry_params
        params.require(:pantry).permit(:name)
      end
end
