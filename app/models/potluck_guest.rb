class PotluckGuest < ApplicationRecord
  belongs_to :potluck
  belongs_to :user
end
