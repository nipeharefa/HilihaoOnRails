class Sidi < ApplicationRecord
  belongs_to :congregation

  validates :sidi_at, presence: true
end
