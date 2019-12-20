# No need to change or write any code in this file.
#
# After you complete all specs, you can play your game by
# running this file with `ruby lib/play_ghost.rb` in your terminal!

require_relative "game.rb"

puts "Enter the names of the players: "
name_1, name_2 = gets.chomp.split(" ")
ghost = Game.new(name_1,name_2)
ghost.run

# until battleship.game_over? do
#   puts "-------------------------"
#   battleship.turn
# end
