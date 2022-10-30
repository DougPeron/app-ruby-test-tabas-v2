class ApartsController < ApplicationController
  before_action :set_apart, only: %i[ show update destroy ]

  # GET /aparts
  def index
    @aparts = Apart.all

    render json: @aparts
  end

  # GET /aparts/1
  def show
    render json: @apart
  end

  # POST /aparts
  def create
    @apart = Apart.new(apart_params)

    if @apart.save
      render json: @apart, status: :created, location: @apart
    else
      render json: @apart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /aparts/1
  def update
    if @apart.update(apart_params)
      render json: @apart
    else
      render json: @apart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /aparts/1
  def destroy
    @apart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_apart
      @apart = Apart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def apart_params
      params.require(:apart).permit(:title, :locale, :price, :pic1, :pic2, :pic3, :pic4, :pic5)
    end
end
