# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Occasion.destroy_all

10.times do
    Occasion.create(
      name: Faker::Music.band,
      description: Faker::Hipster.sentence,
      time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
      additional_info: Faker::Lorem.sentence,
    )
  end
  
  puts "10 Events Seeded"
  