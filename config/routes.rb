Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home
  
  get 'admin', to: 'admin#index'
  get 'admin/*param', to: 'admin#index'

  scope '/api', module: 'api' do
    resources :setting
    resources :congregation
  end
end
