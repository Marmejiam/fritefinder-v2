class Api::V1::ReviewsController < ApplicationController
  def index
    @reviews = Reviews.order(created_at: :desc)
    render json: @reviews
  end
end
