class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text , null: false
      t.integer :post_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :comments, :post_id
  end
end
