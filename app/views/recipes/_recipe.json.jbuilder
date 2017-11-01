json.extract! recipe, :id, :name, :image, :URI, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
