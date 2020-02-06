class RemovePictureUrlFromUsers < ActiveRecord::Migration[6.0]
  def change

    remove_column :users, :picture_url, :string
  end
end
