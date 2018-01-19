class V1::InquirySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :tel, :comp_name, :comp_address, :title, :description, :github_id, :status, :inquiry_category_id
end
