require 'rails_helper'

RSpec.describe Api::CongregationController, type: :controller do
  it "guest cant access the endpoint" do
    get :index
    expect(response.status).to eql(401)
  end
end
