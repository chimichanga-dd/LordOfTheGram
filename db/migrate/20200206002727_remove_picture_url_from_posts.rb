class RemovePictureUrlFromPosts < ActiveRecord::Migration[6.0]
  def change

    remove_column :posts, :picture_url, :string
  end
end
