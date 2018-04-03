class Congregation < ApplicationRecord
  has_one :baptism
  has_one :sidi
  belongs_to :user, optional: true
  
  accepts_nested_attributes_for :baptism, :sidi
  # Enum Gender
  enum gender: [:female, :male ]

  
  # Kaminari paginate
  paginates_per 50

  # validation

  validates :name, presence: true
  validates :place_of_birth, presence: true
  validates :date_of_birth, presence: true
  # validasi gender
  validates :gender, inclusion: { in: %w(female male),
    message: "%{value} is not a valid gender" }
end
