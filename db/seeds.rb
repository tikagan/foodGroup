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
  ingredient_id: potato.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'item'
  })
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
  ingredient_id: potato.id,
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
  ingredient_id: potato.id,
  user_id: ali.id,
  quantity: 6,
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

#luke's weekly grocery list
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: potato.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'item'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: mustard.id,
  user_id: luke.id,
  quantity: 34,
  unit: 'grams'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: cumin.id,
  user_id: luke.id,
  quantity: 73,
  unit: 'grams'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: rice.id,
  user_id: luke.id,
  quantity: 10,
  unit: 'kilos'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: chicken.id,
  user_id: luke.id,
  quantity: 5,
  unit: 'thighs'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: artichoke.id,
  user_id: luke.id,
  quantity: 7,
  unit: 'item'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: butter.id,
  user_id: luke.id,
  quantity: 5,
  unit: 'lbs'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: potato.id,
  user_id: luke.id,
  quantity: 6,
  unit: 'lbs'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: cucumber.id,
  user_id: luke.id,
  quantity: 9,
  unit: 'item'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: onion.id,
  user_id: luke.id,
  quantity: 7,
  unit: 'item'
})
Grocery.create!({
  name: 'weekly groceries',
  ingredient_id: eggplant.id,
  user_id: luke.id,
  quantity: 3,
  unit: 'item'
})

#ali's monthly groceries
Grocery.create!({
  name: 'monthly groceries',
  name: 'monthly groceries',
  ingredient_id: poali.id,
  user_id: luke.id,
  quantity: 1,
  unit: 'item'
  })
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: tomato.id,
  user_id: ali.id,
  quantity: 9,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: onion.id,
  user_id: ali.id,
  quantity: 7,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: leek.id,
  user_id: ali.id,
  quantity: 5,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: fennel.id,
  user_id: ali.id,
  quantity: 1,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: olive_oil.id,
  user_id: ali.id,
  quantity: 1,
  unit: 'litre'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: potato.id,
  user_id: ali.id,
  quantity: 5,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: eggplant.id,
  user_id: ali.id,
  quantity: 8,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: zucchini.id,
  user_id: ali.id,
  quantity: 4,
  unit: 'item'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: rosemary.id,
  user_id: ali.id,
  quantity: 34,
  unit: 'gram'
})
Grocery.create!({
  name: 'monthly groceries',
  ingredient_id: potato.id,
  user_id: ali.id,
  quantity: 1,
  unit: 'item'
})
