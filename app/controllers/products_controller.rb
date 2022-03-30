class ProductsController < ApplicationController

  before_action :set_product, only: %i(api_update edit api_show api_delete)


  def index; end
  def edit; end
  def create; end



  def api_index
    products = Product.all

    render json: {
      products: products
    }, status: 200
  end

  def api_create
    if Product.create( product_params )
      render json: {}, status: 200
    else
      render json: {}, status: 422
    end
  end

  def api_show
    render json: {
      product: @product
    }, status: 200
  end

  def api_update
    if @product.update(product_params)
      render json: {}, status: 200
    else
      render json: {}, status: 422
    end
  end

  def api_delete
    if @product && @product.destroy
      render json: {}, status: 200
    else
      render json: {}, status: 404
    end
  end

  private

  def set_product
    @product = Product.find(params["id"])
  end

  def product_params
    params.require(:product).permit(
      :name,
      :description,
      :price
    )
  end

end
