module Api
  class SettingController < ApiController
    before_action :authenticate_user
    
    def index
      render :json => Setting.first
    end

  end
end
