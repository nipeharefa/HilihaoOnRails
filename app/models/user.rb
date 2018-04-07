class User < ApplicationRecord
  has_secure_password

  # validations
  validates :name, presence: true
  validates :email, uniqueness: true

  # relations
  has_one :staff
end
