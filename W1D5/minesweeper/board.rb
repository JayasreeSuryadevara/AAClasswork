require_relative 'tile'

# Minesweeper Board
# Contains a grid of 9X9 tile objects
class Board

    attr_reader :size

    # Fill the board with mines at random positions
    def initialize
        @grid = self.fill_mines(9)
        @size = @grid.length
    end

    def render


    end

    def won?
        grid.flatten.all? do |tile| 
          (tile.revealed && !tile.has_mine)  || (tile.has_mine && !tile.revealed)
        end
    end

    def lost?
        grid.flatten.any? { |tile| tile.has_mine && tile.revealed }
    end
    
    private
    attr_reader :grid
end

