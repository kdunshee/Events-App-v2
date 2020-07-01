class Api::OccasionsController < ApplicationController
    before_action :set_occasion, only: [:show, :update, :destroy]

  def index
    render json: Occasion.all
  end

  def show
    render json: @occasion
  end

  def create
    occasion = Occasion.new(occasion_params)

    if occasion.save
      render json: occasion
    else
      render json: occasion.errors, status: 422
    end
  end

  def update
    if @occasion.update(occasion_params)
      render json: @occasion
    else
      render json: @occasion.errors, status: 422
    end
  end

  def destroy
    @occasion.destroy
  end

  private
    def set_occasion
      @occasion = Occasion.find(params[:id])
    end

    def occasion_params
      params.require(:occasion).permit(:name, :description, :time, :additional_info)
    end
end
