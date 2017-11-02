class Potluck < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  has_many :potluck_guest, dependent: :destroy
end
