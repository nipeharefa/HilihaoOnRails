require 'rails_helper'

RSpec.describe User, type: :model do
  it "is not valid with noting" do
    user = User.new
    user.save
    expect(user).to_not be_valid
  end
  it "is valid with noting" do
    user = User.new
    user.name = 'Foo'
    user.email = 'foo@bar.com'
    user.password = 'foobar'
    user.save
    expect(user).to be_valid
  end
end