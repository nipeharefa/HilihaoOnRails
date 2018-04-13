# json.extract! congregation, :id, :name, :place_of_birth
json.access_token @token.token
json.expires_in @token.payload[:exp]
json.token_type "bearer"
# User Information
json.user {
  json.name @user.name
  json.email @user.email
}