class ProfileController < ApplicationController
  before_action :authenticate
  def show
  		if current_user
  			redirect_to '/home'
    end
  end
end


