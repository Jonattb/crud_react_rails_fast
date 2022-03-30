Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/products", to: "products#index", as: :products
  get "/products/create", to: "products#create", as: :products_create
  get "/products/:id", to: "products#edit", as: :products_edit

  get "/api/products", to: "products#api_index"
  get "/api/products/:id", to: "products#api_show"
  post "/api/products", to: "products#api_create"
  put "/api/products/:id", to: "products#api_update"
  delete "/api/products/:id", to: "products#api_delete"

end
