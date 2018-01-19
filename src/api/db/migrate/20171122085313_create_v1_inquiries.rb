class CreateV1Inquiries < ActiveRecord::Migration[5.1]
  def change
    create_table :inquiries do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :tel
      t.string :comp_name
      t.text :comp_address
      t.string :title
      t.text :description
      t.string :github_id
      t.string :status
      t.integer :inquiry_category_id

      t.timestamps
    end
  end
end
