Rails.application.routes.draw do
  
  resources :villas
  resources :users, only: [:index, :new, :create, :show]


  # VILLA ROUTES
  get '/villas', to: 'villas#index'
  get '/villas/new', to: 'villas#new'
  post '/villas', to: 'villas#create'
  get '/villas/:id', to: 'villas#show'


  # USERS ROUTES

  # POST /signup
  post '/signup', to: 'users#create'
  # GET /me
  get '/me', to: 'users#show'

  #  POST /login
  post '/login', to: 'sessions#create'
  #  DELETE /logout
  delete '/logout', to: 'sessions#destroy'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
