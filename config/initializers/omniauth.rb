Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_KEY'], ENV['GOOGLE_SECRET']
  provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET'],
    scope: 'public_profile,email',
    info_fields: 'first_name,last_name,email',
    client_options: {
      callback_path: 'auth/facebook/callback',
    }
end
