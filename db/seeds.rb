# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

setting = Setting.create({church_name: 'BNKP Hilihao'})

userStaff = User.create({name: 'Administrator', email: 'admin@bnkp-hilihao.org', 'password': 'password'})
# userCongregation = User.create({name: 'Nipe Setiawan Harefa', email: 'nipe@harefa.com', 'password': 'password'})

staff = Staff.create({user: userStaff, name: userStaff.name, email: userStaff.email})
# congregation = Congregation.create({name: 'Nipe Setiawan Harefa'})