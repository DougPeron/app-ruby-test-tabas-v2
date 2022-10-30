class CreateAparts < ActiveRecord::Migration[7.0]
  def change
    create_table :aparts do |t|
      t.string :title
      t.string :locale
      t.string :price
      t.string :pic1
      t.string :pic2
      t.string :pic3
      t.string :pic4
      t.string :pic5

      t.timestamps
    end
  end
end
