class CreateBaptisms < ActiveRecord::Migration[5.1]
  def change
    create_table :baptisms do |t|
      t.date "baptism_at", :null => false
      t.string "church_name"
      t.timestamps
    end
    add_reference :baptisms, :congregation, foreign_key: true
  end
end
