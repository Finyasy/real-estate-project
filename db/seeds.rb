# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

villas = Villa.create([
    { name: 'Alfajiri Villas', price: 10000, villa_url: 'https://www.alfajirivillas.com/app/uploads/2021/12/Alfajiri-2022-63.1-scaled.jpg', rating:5},
    { name: 'Great Cottages', price: 15000, villa_url: 'http://www.travelstart.co.ke/blog/wp-content/uploads/2014/04/Waterside-Villa.jpg', rating:4},
    { name: 'Maiyani villas Nanyuki', price: 20000, villa_url: 'https://firstavenueproperties.co.ke/wp-content/uploads/2018/02/g-Rooftop-1.jpg', rating:3}
])