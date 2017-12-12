class Api::DishesController < ApplicationController
  before_action :set_api_dish, only: [:show, :update, :destroy]

  # GET /api/dishes
  def index
    @api_dishes = Api::Dish.all

    render json: @api_dishes
  end

  # GET /api/dishes/1
  def show
    render json: @api_dish
  end

  # POST /api/dishes
  def create
    @api_dish = Api::Dish.new(api_dish_params)

    if @api_dish.save
      render json: @api_dish, status: :created, location: @api_dish
    else
      render json: @api_dish.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/dishes/1
  def update
    if @api_dish.update(api_dish_params)
      render json: @api_dish
    else
      render json: @api_dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/dishes/1
  def destroy
    @api_dish.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_dish
      @api_dish = Api::Dish.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_dish_params
      params.fetch(:api_dish, {})
    end
end
