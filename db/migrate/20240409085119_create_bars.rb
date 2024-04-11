class CreateBars < ActiveRecord::Migration[7.1]
  def change
    create_table :bars do |t|
      t.string :name
      t.text :address
      t.integer :frites_price
      t.string :image_url

      t.timestamps
    end
  end
end
