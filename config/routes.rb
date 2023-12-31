Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'pages#about'
  get '/about', to: 'pages#about', as: :about
  get '/experience', to: 'pages#experience', as: :experience
  # Removed pending full implementation. Github is sufficient for now.
  # get '/projects', to: 'pages#projects', as: :projects
  get '/education', to: 'pages#education', as: :education
  get '/skills', to: 'pages#skills', as: :skills
  get '/contact', to: 'pages#contact', as: :contact
end
