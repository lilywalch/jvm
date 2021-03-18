Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/home', to: 'pages#home'
  get '/aufgabe1', to: 'pages#aufgabe1'
  get '/aufgabe2', to: 'pages#aufgabe2'
  get '/aufgabe3', to: 'pages#aufgabe3'
end
