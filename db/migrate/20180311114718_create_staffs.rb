class CreateStaffs < ActiveRecord::Migration[5.1]
  def change
    create_table :staffs do |t|
      t.string "name"
      t.string "email"
      t.timestamps
    end
    add_reference :staffs, :user, foreign_key: true
  end
end