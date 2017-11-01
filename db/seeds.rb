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

#luke's pantry
Pantry.create!({
  ingredient_id: tomato.id,
  user_id: luke.id,
  quantity: 9,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: onion.id,
  user_id: luke.id,
  quantity: 7,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: leek.id,
  user_id: luke.id,
  quantity: 5,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: fennel.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: olive_oil.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'litre'
})
Pantry.create!({
  ingredient_id: potato.id,
  user_id: luke.id,
  quantity: 5,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: eggplant.id,
  user_id: luke.id,
  quantity: 8,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: zucchini.id,
  user_id: luke.id,
  quantity: 4,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: rosemary.id,
  user_id: luke.id,
  quantity: 34,
  unit: 'gram'
})
Pantry.create!({
  ingredient_id: mustard.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'item'
})


#ali's pantry
Pantry.create!({
  ingredient_id: mustard.id,
  user_id: ali.id,
  quantity: 34,
  unit: 'grams'
})
Pantry.create!({
  ingredient_id: cumin.id,
  user_id: ali.id,
  quantity: 73,
  unit: 'grams'
})
Pantry.create!({
  ingredient_id: rice.id,
  user_id: ali.id,
  quantity: 10,
  unit: 'kilos'
})
Pantry.create!({
  ingredient_id: chicken.id,
  user_id: ali.id,
  quantity: 5,
  unit: 'thighs'
})
Pantry.create!({
  ingredient_id: artichoke.id,
  user_id: ali.id,
  quantity: 7,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: butter.id,
  user_id: ali.id,
  quantity: 5,
  unit: 'lbs'
})

Pantry.create!({
  ingredient_id: cucumber.id,
  user_id: ali.id,
  quantity: 9,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: onion.id,
  user_id: ali.id,
  quantity: 7,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: eggplant.id,
  user_id: ali.id,
  quantity: 3,
  unit: 'item'
})

#kritika's pantry
Pantry.create!({
  ingredient_id: potato.id,
  user_id: kritika.id,
  quantity: 6,
  unit: 'lbs'
})
Pantry.create!({
  ingredient_id: cucumber.id,
  user_id: kritika.id,
  quantity: 9,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: onion.id,
  user_id: kritika.id,
  quantity: 7,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: eggplant.id,
  user_id: kritika.id,
  quantity: 3,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: leek.id,
  user_id: kritika.id,
  quantity: 5,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: fennel.id,
  user_id: kritika.id,
  quantity: 1,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: olive_oil.id,
  user_id: kritika.id,
  quantity: 1,
  unit: 'litre'
})
Pantry.create!({
  ingredient_id: tomato.id,
  user_id: kritika.id,
  quantity: 5,
  unit: 'item'
})
Pantry.create!({
  ingredient_id: zucchini.id,
  user_id: kritika.id,
  quantity: 4,
  unit: 'item'
})

#luke's weekly grocery list
luke_weekly = Grocery.create!({
  name: 'weekly groceries',
  description: 'this is what I need to buy every week',
  user_id: luke.id
})
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: luke_weekly.id,
  quantity: 5,
})
GroceryIngredient.create!({
  ingredient_id: mustard.id,
  grocery_id: luke_weekly.id,
  quantity: 3,
})
GroceryIngredient.create!({
  ingredient_id: cumin.id,
  grocery_id: luke_weekly.id,
  quantity: 7,
})
GroceryIngredient.create!({
  ingredient_id: rice.id,
  grocery_id: luke_weekly.id,
  quantity: 1,
})
GroceryIngredient.create!({
  ingredient_id: chicken.id,
  grocery_id: luke_weekly.id,
  quantity: 5
})
GroceryIngredient.create!({
  ingredient_id: artichoke.id,
  grocery_id: luke_weekly.id,
  quantity: 7
})
GroceryIngredient.create!({
  ingredient_id: butter.id,
  grocery_id: luke_weekly.id,
  quantity: 5
})
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: luke_weekly.id,
  quantity: 6
})
GroceryIngredient.create!({
  ingredient_id: cucumber.id,
  grocery_id: luke_weekly.id,
  quantity: 9
})
GroceryIngredient.create!({
  ingredient_id: onion.id,
  grocery_id: luke_weekly.id,
  quantity: 7
})
GroceryIngredient.create!({
  ingredient_id: eggplant.id,
  grocery_id: luke_weekly.id,
  quantity: 3
})

#ali's monthly groceries
ali_monthly = Grocery.create!({
  name: 'monthly groceries',
  description: 'i only do groceries every month',
  user_id: ali.id
  })
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: ali_monthly.id,
  quantity: 1
  })
GroceryIngredient.create!({
  ingredient_id: tomato.id,
  grocery_id: ali_monthly.id,
  quantity: 9
})
GroceryIngredient.create!({
  ingredient_id: onion.id,
  grocery_id: ali_monthly.id,
  quantity: 7
})
GroceryIngredient.create!({
  ingredient_id: leek.id,
  grocery_id: ali_monthly.id,
  quantity: 5
})
GroceryIngredient.create!({
  ingredient_id: fennel.id,
  grocery_id: ali_monthly.id,
  quantity: 1
})
GroceryIngredient.create!({
  ingredient_id: olive_oil.id,
  grocery_id: ali_monthly.id,
  quantity: 1
})
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: ali_monthly.id,
  quantity: 5
})
GroceryIngredient.create!({
  ingredient_id: eggplant.id,
  grocery_id: ali_monthly.id,
  quantity: 8
})
GroceryIngredient.create!({
  ingredient_id: zucchini.id,
  grocery_id: ali_monthly.id,
  quantity: 4
})
GroceryIngredient.create!({
  ingredient_id: rosemary.id,
  grocery_id: ali_monthly.id,
  quantity: 34
})
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: ali_monthly.id,
  quantity: 1
})

#luke's demo day after party grocery list
luke_extravaganza = Grocery.create!({
  name: 'demo day after party',
  description: 'i love making food for all my lighthouse buddies',
  user_id: luke.id
})
GroceryIngredient.create!({
  ingredient_id: potato.id,
  grocery_id: luke_extravaganza.id,
  quantity: 400
})
GroceryIngredient.create!({
  ingredient_id: leek.id,
  grocery_id: luke_extravaganza.id,
  quantity: 1000
})
GroceryIngredient.create!({
  ingredient_id: rice.id,
  grocery_id: luke_extravaganza.id,
  quantity: 50
})
GroceryIngredient.create!({
  ingredient_id: chicken.id,
  grocery_id: luke_extravaganza.id,
  quantity: 1000
})
GroceryIngredient.create!({
  ingredient_id: fennel.id,
  grocery_id: luke_extravaganza.id,
  quantity: 500
})
GroceryIngredient.create!({
  ingredient_id: parsley.id,
  grocery_id: luke_extravaganza.id,
  quantity: 1000
})
GroceryIngredient.create!({
  ingredient_id: rosemary.id,
  grocery_id: luke_extravaganza.id,
  quantity: 1000
})
GroceryIngredient.create!({
  ingredient_id: olive_oil.id,
  grocery_id: luke_extravaganza.id,
  quantity: 50
})
GroceryIngredient.create!({
  ingredient_id: cumin.id,
  grocery_id: luke_extravaganza.id,
  quantity: 80
})

extravaganza = Potluck.create!({
  name: "Luke's Post-DemoDay Extravaganza!",
  creator_id: luke.id
})

PotluckGuest.create!({
  potluck_id: extravaganza.id,
  user_id: kritika.id
})
PotluckGuest.create!({
  potluck_id: extravaganza.id,
  user_id: ali.id
})
