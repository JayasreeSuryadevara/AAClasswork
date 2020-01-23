# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: "johnsmith")
a1 = Artwork.create(title: "awesome artwork 1", artist_id: u1.id, image_url: "www.awesomeimage.com")
Artwork.create(title: "awesome artwork 2", artist_id: u1.id, image_url: "www.awesomeimage2.com")
Artwork.create(title: "awesome artwork 3", artist_id: u1.id, image_url: "www.awesomeimage3.com")

u2 = User.create(username: "janesmith")
ja1 = Artwork.create(title: "Jane's awesome artwork 1", artist_id: u2.id, image_url: "www.janesphotos.com/photo1")
Artwork.create(title: "Jane's awesome artwork 2", artist_id: u2.id, image_url: "www.janesphotos.com/photo2")

ArtworkShare.create(artwork_id: a1.id, viewer_id: u2.id)
ArtworkShare.create(artwork_id: ja1.id, viewer_id: u1.id)

Comment.create(artwork_id: a1.id, user_id: u2.id, body: "this is awesome!")
Comment.create(artwork_id: a1.id, user_id: u1.id, body: "thanks so much!")

Comment.create(artwork_id: ja1.id, user_id: u1.id, body: "great photo")
Comment.create(artwork_id: ja1.id, user_id: u2.id, body: "thanks")
Comment.create(artwork_id: ja1.id, user_id: u1.id, body: "where was this taken?")
Comment.create(artwork_id: ja1.id, user_id: u2.id, body: "somewhere")