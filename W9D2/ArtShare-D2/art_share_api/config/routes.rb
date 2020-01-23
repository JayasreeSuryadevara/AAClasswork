Rails.application.routes.draw do

  resources :favorites
  resources :likes
  resources :artworks, except: [:new,:edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:new,:edit] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]

  end

  resources :artworks do
    resources :comments, only: [:index]
    member do
      post :like, to: "artworks#like"
      post :unlike, to: "artworks#unlike"
    end
    member do
      post :favorite, to: "artworks#favorite"
      post :unfavorite, to: "artworks#unfavorite"
    end
  end
  
  resources :artwork_shares, only: [:index, :create, :destroy]
  
  resources :comments do
    member do
      post :like, to: "comments#like"
      post :unlike, to: "comments#unlike"
    end
  end

end 
