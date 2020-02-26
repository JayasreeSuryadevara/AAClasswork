@pokemon.each do |poke|
    poke.set! poke.id do
        json.extract! poke, :id, :name
        json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
    end
end
