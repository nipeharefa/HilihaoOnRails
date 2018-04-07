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

ActiveRecord::Schema.define(version: 20180403123312) do

  create_table "baptisms", force: :cascade do |t|
    t.date "baptism_at", null: false
    t.string "church_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "congregation_id"
    t.index ["congregation_id"], name: "index_baptisms_on_congregation_id"
  end

  create_table "congregations", force: :cascade do |t|
    t.string "name"
    t.integer "gender"
    t.date "date_of_birth"
    t.string "place_of_birth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_congregations_on_user_id"
  end

  create_table "settings", force: :cascade do |t|
    t.string "church_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sidis", force: :cascade do |t|
    t.date "sidi_at", null: false
    t.string "church_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "congregation_id"
    t.index ["congregation_id"], name: "index_sidis_on_congregation_id"
  end

  create_table "staffs", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_staffs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
