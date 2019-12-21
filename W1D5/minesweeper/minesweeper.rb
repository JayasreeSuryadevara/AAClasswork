require_relative 'board'

# Main game file to create minesweeper game
# 'ruby minesweeper.rb ' to play the game
class Minesweeper

    def initialize(board)
        @board = board
    end

    # Run the game until game is won or lost!
    def run
        play_turn until won?
        board.render
        puts "You Won the Game!"
    end

    # Each time show the board with enough info to unerstand it
    def play_turn
        system("clear")
        puts " Minesweeper Game - find the mines!!"
        board.render
        puts " Enter a position you want to reveal!"
        put " Hope it does not have a mine! use format: row col"
        begin
            pos = gets.chomp.split(" ").map(&:to_i)
        rescue
            puts " Please enter a valid pos as: row col "
        end
        board[pos] = pos if valid_pos?(pos)
    end

    # Ask board if the game is won
    def won?
        board.won?
    end

    # Check if the pos the player gave is valid in the grid
    def valid_pos?(pos)
        pos.is_a?(Array) && 
        pos.length == 2 &&
        pos.all? { |el| (0...board.size).include?(el) }
    end

    private
    attr_reader :board
end

