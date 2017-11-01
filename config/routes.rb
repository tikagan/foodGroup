Rails.application.routes.draw do


  namespace :api do
    resource :pantry
    resources :potlucks
    resources :potluck_guests
    resources :groceries
    resources :ingredients
    resources :grocery_ingredients
    resources :recipes
    resources :potluck_recipes
  end

  root to: "home#show"

  # get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'home', to: 'home#show'
  get 'profile', to: 'profile#show', as: 'profile'

  get 'api_test', to: 'search#show', as: 'search'
  get 'api_test', to: 'search#potluck', as: 'potlucksearch'

  get '*path', to: 'home#show'

end
