# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

kritika = User.find_or_create_from_auth_hash({
  provider: 'google_oath2',
  uid: 111274006798249701955,
  info: {
    first_name: 'Kritika',
    last_name: 'Ganapathy',
    email: 'ganapathy.kritika@gmail.com',
    image: 'https://lh6.googleusercontent.com/-3LSfa7C5w98/AAAAAAAAAAI/AAAAAAAAACk/K1AptDvLJuY/photo.jpg'
    }
  })

luke = User.find_or_create_from_auth_hash({
  provider: 'google_oath2',
  uid: 116865386940649809883,
  info: {
    first_name: 'Luke',
    last_name: 'Siemens',
    email: 'lukesiemens@gmail.com',
    image: 'https://lh3.googleusercontent.com/-DLv42uF5w2M/AAAAAAAAAAI/AAAAAAAAMsA/xq5t-UW4Ioo/photo.jpg'
    }
  })

ali = User.find_or_create_from_auth_hash({
  provider: 'google_oath2',
  uid: 117545400665404803991,
  info: {
    first_name: 'Ali',
    last_name: 'Abji',
    email: 'aliabji@gmail.com',
    image: 'https://lh6.googleusercontent.com/-u03snmpyC0w/AAAAAAAAAAI/AAAAAAAAEVw/7FpKAnSkqeg/photo.jpg'
    }
  })

potato = Ingredient.create!({ name: 'potato' })
tomato = Ingredient.create!({ name: 'tomato' })
onion = Ingredient.create!({ name: 'onion' })
leek = Ingredient.create!({ name: 'leek' })
cucumber = Ingredient.create!({ name: 'cucumber' })
rice = Ingredient.create!({ name: 'rice' })
chicken = Ingredient.create!({ name: 'chicken' })
artichoke = Ingredient.create!({ name: 'artichoke' })
fennel = Ingredient.create!({ name: 'fennel' })
parsley = Ingredient.create!({ name: 'parsley' })
thyme = Ingredient.create!({ name: 'thyme' })
rosemary = Ingredient.create!({ name: 'rosemary' })
olive_oil = Ingredient.create!({ name: 'olive oil' })
butter = Ingredient.create!({ name: 'butter' })
eggplant = Ingredient.create!({ name: 'eggplant' })
zucchini = Ingredient.create!({ name: 'zucchini' })
mustard = Ingredient.create!({ name: 'mustard' })
cumin = Ingredient.create!({ name: 'cumin' })

grocery_list = GroceryList.create!({
  
  })
