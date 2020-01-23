Rails.application.routes.draw do
  resources :artworks, except: [:new,:edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:new,:edit] do
    resources :artworks, only: [:index]
  end

  resources :artwork_shares, only: [:index, :create, :destroy]
end 
