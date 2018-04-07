require 'rails_helper'

RSpec.describe "Api::Congregations", type: :request do
  
  def authenticated_header
    token = Knock::AuthToken.new(payload: { sub: User.first.id }).token

    {
      'Authorization': "Bearer #{token}",
      'ACCEPT' => "application/json",     # This is what Rails 4 accepts
    }
  end

  describe "GET /api_congregations" do
    it "works! (now write some real specs)" do
      get "/api/congregation"
      expect(response).to have_http_status(401)
    end

    it "admin can get all congregtion" do
      get "/api/congregation", headers: authenticated_header
      expect(response).to have_http_status(200)
    end
  end
end
