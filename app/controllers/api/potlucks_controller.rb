class Api::PotlucksController < Api::ApplicationController
  before_action :set_potluck, only: [:show, :edit, :update, :destroy]

  # GET /potlucks
  # GET /potlucks.json
  def index
    @potlucks = Potluck.all
  end

  # GET /potlucks/1
  # GET /potlucks/1.json
  def show
  end

  # POST /potlucks
  # POST /potlucks.json
  def create
    @potluck = Potluck.new(potluck_params)

    respond_to do |format|
      if @potluck.save
        format.json { render :show, status: :created, location: @potluck }
      else
        format.json { render json: @potluck.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /potlucks/1
  # PATCH/PUT /potlucks/1.json
  def update
    respond_to do |format|
      if @potluck.update(potluck_params)
        format.json { render :show, status: :ok, location: @potluck }
      else
        format.json { render json: @potluck.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /potlucks/1
  # DELETE /potlucks/1.json
  def destroy
    @potluck.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_potluck
      @potluck = Potluck.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def potluck_params
      params.require(:potluck).permit(:name)
    end
end
