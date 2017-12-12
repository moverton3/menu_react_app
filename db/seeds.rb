
15.times do
  Dish.create(
    name: Faker::Food.dish,
    price: (rand * 10).round(2),
    description: Faker::Lorem.sentences)
end
