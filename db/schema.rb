# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171101204213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groceries", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "description"
  end

  create_table "grocery_ingredients", force: :cascade do |t|
    t.bigint "ingredient_id"
    t.float "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "grocery_id"
    t.index ["ingredient_id"], name: "index_grocery_ingredients_on_ingredient_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pantries", force: :cascade do |t|
    t.bigint "ingredient_id"
    t.bigint "user_id"
    t.float "quantity"
    t.string "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_pantries_on_ingredient_id"
    t.index ["user_id"], name: "index_pantries_on_user_id"
  end

  create_table "potluck_guests", force: :cascade do |t|
    t.bigint "potluck_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["potluck_id"], name: "index_potluck_guests_on_potluck_id"
    t.index ["user_id"], name: "index_potluck_guests_on_user_id"
  end

  create_table "potlucks", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "creator_id"
    t.string "image"
    t.string "description"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "email"
    t.string "firstname"
    t.string "lastname"
    t.string "picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "groceries", "users"
  add_foreign_key "grocery_ingredients", "groceries"
  add_foreign_key "grocery_ingredients", "ingredients"
  add_foreign_key "pantries", "ingredients"
  add_foreign_key "pantries", "users"
  add_foreign_key "potluck_guests", "potlucks"
  add_foreign_key "potluck_guests", "users"
  add_foreign_key "potlucks", "users", column: "creator_id"
end
