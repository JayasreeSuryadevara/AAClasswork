require_relative 'Card.rb'

class Board

    attr_reader :grid, :size

    def initialize(size)
        @grid = Array.new(size) { Array.new(size)}
        @size = size
        populate
    end

    def populate
        # Should fill the board with a set of shuffled card pairs
        pair_count = size**2/2
        cards = Card.shuffled_pairs(pair_count)
        (0...size).each do |row|
            (0...size).each do |col|
                pos = [row,col]
                self[pos] = cards.pop
            end
        end
    end

    def render
        # Should print out a representstion of the Board's current state
        self.grid.each do |row| 
            puts row.join(" ") 
        end
    end

    def won?
        # Should return true if all cards have been revealed
        self.grid.all? do |row|
            row.all?(&:revealed?)
        end
    end

    def hide(pos)
        self[pos].hide
    end

    def reveal(pos)
        # should reveal Card at 'guessed_pos' unless already face-up
        # It should return the value of the card revealed
        if revealed?(pos)
            puts " You already opened that card"
        else
            self[pos].reveal
        end
        self[pos].value
    end

    def revealed?(pos)
        self[po].revealed?
    end

    def [](pos)
        row,col = pos
        self.grid[row][col]
    end

    def []=(pos,value)
        row,col = pos
        self.grid[row][col] = value
    end

end

