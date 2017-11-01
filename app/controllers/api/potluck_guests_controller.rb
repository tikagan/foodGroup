class Api::PotluckGuestsController < Api::ApplicationController
    # GET /potluck_guests
    # GET /potluck_guests.json
    def index
      # add find potluck by page user is on functionality here
      @potluck_guests = PotluckGuest.where(potluck_id: params[:potluck_id])

      render json: {result: @potluck_guests}
    end

    # GET /potluck_guests/1
    # GET /potluck_guests/1.json
    def show

    end

    # GET /potluck_guests/new
    def new
      @potluck_guest = PotluckGuest.new
    end

    # GET /potluck_guests/1/edit
    def edit
    end

    # POST /potluck_guests
    # POST /potluck_guests.json
    def create
      @potluck_guest = PotluckGuest.new(potluck__params)

      respond_to do |format|
        if @potluck_guest.save
          format.html { redirect_to @potluck_guest, notice: 'PotluckGuest was successfully created.' }
          format.json { render :show, status: :created, location: @potluck_guest }
        else
          format.html { render :new }
          format.json { render json: @potluck_.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /potluck_guests/1
    # PATCH/PUT /potluck_guests/1.json
    def update
      respond_to do |format|
        if @potluck_guest.update(potluck__params)
          format.html { redirect_to @potluck_guest, notice: 'PotluckGuest was successfully updated.' }
          format.json { render :show, status: :ok, location: @potluck_guest }
        else
          format.html { render :edit }
          format.json { render json: @potluck_guest.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /potluck_guests/1
    # DELETE /potluck_guests/1.json
    def destroy
      @potluck_guest.destroy
      respond_to do |format|
        format.html { redirect_to potluck_guests_url, notice: 'PotluckGuest was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_potluck_guest
        @potluck_guest = PotluckGuest.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def potluck_guest_params
        params.require(:potluck_guest).permit(:name)
      end

end
