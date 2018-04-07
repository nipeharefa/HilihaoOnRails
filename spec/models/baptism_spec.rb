require 'rails_helper'

RSpec.describe Baptism, type: :model do

  it "is not valid without a baptism_at" do
    baptism = Baptism.new(baptism_at: nil)
    expect(baptism).to_not be_valid
  end

  it "is not valid without congregation" do
    baptism = Baptism.new(baptism_at: DateTime.now)
    expect(baptism).to_not be_valid
  end
end
