# == Schema Information
#
# Table name: inquiries
#
#  id                  :integer          not null, primary key
#  first_name          :string(255)
#  last_name           :string(255)
#  email               :string(255)
#  tel                 :string(255)
#  comp_name           :string(255)
#  comp_address        :text(65535)
#  title               :string(255)
#  description         :text(65535)
#  github_id           :string(255)
#  status              :string(255)
#  inquiry_category_id :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'valid_email'

class Inquiry < ApplicationRecord
  include ActiveModel::Validations

  ### Validations #########################################################################################################
  #         column_name         |     presence      |           length          |               others
  #########################################################################################################################
  validates :first_name,          :presence => true, :length => { maximum: 255 }
  validates :last_name,           :presence => true, :length => { maximum: 255 }
  validates :email,               :presence => true, :length => { maximum: 255 }, :email => true
  validates :tel,                 :presence => true, :length => { maximum: 255 }
  validates :comp_name,                              :length => { maximum: 255 }
  validates :title,               :presence => true, :length => { maximum: 255 }
  validates :description,         :presence => true
  validates :github_id,                              :length => { maximum: 255 }
  validates :inquiry_category_id, :presence => true,                              :numericality => { only_integer: true }

  state_machine :status, initial: :un_replied do
    state :un_replied
    state :replied

    event :reply do
      transition :un_replied => :replied
    end
  end
end
