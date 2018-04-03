class CreateSidis < ActiveRecord::Migration[5.1]
  def change
    create_table :sidis do |t|
      t.date "sidi_at", :null => false
      t.string "church_name"
      t.timestamps
    end
    add_reference :sidis, :congregation, foreign_key: true, nullable: true
  end
end
