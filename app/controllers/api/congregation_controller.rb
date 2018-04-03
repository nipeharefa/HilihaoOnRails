module Api
  class CongregationController < ApiController
    before_action :authenticate_user
    
    def index
      @congregation = Congregation.page(params[:page])
    end

    def show
      @congregation = Congregation.find(params[:id])
    end

    def create
      ActiveRecord::Base.transaction do
        begin
          @congregation = Congregation.new(congregation_params)
          if @congregation.valid?
            @congregation.save
            render 'show'
          else
            render json: @congregation.errors.messages, :status => :unprocessable_entity
          end
        rescue => e
          render json: e, status: :bad_request
        end
      end

    end

    # private
    def congregation_params
      params.require(:jemaat)
        .permit(
          :name,
          :gender,
          :place_of_birth,
          :date_of_birth,
          baptism_attributes: [:baptism_at],
          sidi_attributes: [:sidi_at]
        )
    end

  end
end
