class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :description
      t.string :picture_url
      t.integer :user_id
            
      t.timestamps
    end
    add_index :posts, :user_id
  end
end
