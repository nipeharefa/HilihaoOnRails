class UserTokenController < Knock::AuthTokenController
  def create
    
    @token = auth_token
    @user = get_user @token.payload
    
    render 'create', status: :created
  end

  # private 

  def get_user payload
    entity_class.find payload[:sub]
  end
end
