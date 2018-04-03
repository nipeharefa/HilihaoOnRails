json.extract! congregation, :id, :name, :place_of_birth

json.date_of_birth_formatted congregation.date_of_birth
json.gender congregation.gender
json.url congregation_url(congregation.id, format: :json)