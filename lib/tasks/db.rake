namespace :db do
  # Original Code
  # http://nithinbekal.com/posts/rake-db-reseed/
  desc 'Drop, create, migrate then seed the development database'
  task reseed: [ 'db:drop', 'db:create', 'db:migrate', 'db:seed' ] do
    puts 'Reseeding completed.'
  end
end