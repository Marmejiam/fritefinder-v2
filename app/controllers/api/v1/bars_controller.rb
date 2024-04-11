class Api::V1::BarsController < ApplicationController
  # before_action :set_bar, only: [:show, :update, :destroy]

  def index
    @bars = Bar.order(created_at: :desc)
    render json: @bars
  end

  def show
    @bar = Bar.find(params[:id])
    render json: @bar
  end

  def create
    @bar = Bar.create(bar_params)
    if @bar.save
      render json: @bar, status: :created, location: api_v1_bar_url(@bar)
    else
      render json: @bar.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @bar = Bar.find(params[:id])
    @bar.destroy!
  end

  def bar_params
    params.require(:bar).permit(:name, :address, :frites_price)
  end

  # def set_bar
  #   @bar = Bar.find(params[:id])
  # end
end
