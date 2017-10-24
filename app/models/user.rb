class User < ApplicationRecord
	has_many :grocery_list
	has_one :pantry

	def self.find_or_create_from_auth_hash(auth)
		where(provider: auth[:provider], uid: auth[:uid]).first_or_initialize.tap do |user|
			user.provider = auth[:provider]
			user.uid = auth[:uid]
			user.firstname = auth[:info][:first_name]
			user.lastname = auth[:info][:last_name]
			user.email = auth[:info][:email]
			user.picture = auth[:info][:image]
			user.save!
			
		end
	end
end
