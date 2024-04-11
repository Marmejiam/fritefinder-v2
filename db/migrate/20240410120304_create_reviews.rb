class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.references :bar, null: false, foreign_key: true
      t.text :comment
      t.integer :rate
      t.text :title

      t.timestamps
    end
  end
end
