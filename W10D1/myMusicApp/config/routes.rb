Rails.application.routes.draw do

  resources :users, only: [:create, :new, :show, :destroy]
  resources :session, only: [:create, :destroy, :new]

  resources :bands do
    resources :albums, only: [:new]
  end

  resources :albums, only: [:edit, :show, :create, :update, :destroy] do
    resources :tracks, only: [:new]
  end

  resources :tracks, only: [:create, :edit, :show, :update, :destroy]
  
  root to: redirect('/bands')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
