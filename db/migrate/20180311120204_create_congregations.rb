class CreateCongregations < ActiveRecord::Migration[5.1]
  def change
    create_table :congregations do |t|
      t.string :name
      t.integer :gender
      t.date :date_of_birth
      t.string :place_of_birth, null: true
      t.timestamps
    end
    add_reference :congregations, :user, foreign_key: true, nullable: true
  end
end
