class CreateVillas < ActiveRecord::Migration[6.1]
  def change
    create_table :villas do |t|
      t.string :name
      t.integer :price
      t.string :villa_url
      t.integer :rating

      t.timestamps
    end
  end
end
