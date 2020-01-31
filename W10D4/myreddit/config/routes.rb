Rails.application.routes.draw do
  resources :posts, except: [:update, :edit, :index]
  resources :subs
  resources :users do
    resources :posts, only: [:update, :edit]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :session, only: [:new, :create, :destroy]
end
