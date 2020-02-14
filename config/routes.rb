Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # single page
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update,:not_following]
    get 'not_following' => "users#not_following"
    resources :follows, only: [:create, :destroy]
    resources :posts, except: [:new]
    resources :comments, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
