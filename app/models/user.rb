class User < ApplicationRecord
  has_secure_password

  # validations
  validates :name, presence: true

  # relations
  has_one :staff
end
