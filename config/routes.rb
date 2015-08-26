Rails.application.routes.draw do
  root 'ideas#index'

  resources :ideas, only: [:index, :create, :update, :destroy, :edit]
end
