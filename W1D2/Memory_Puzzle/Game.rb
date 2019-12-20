require_relative 'Board.rb'

class Game

    attr_reader :board

    def initialize(size = 4)
        @board = Board.new(size)
        @previous_guess = nil
    end

    def play
        until self.board.won?
            self.board.render
            puts " Enter the next position: "
            pos = gets.chomp.split(" ").to_i
            make_guess(pos)
        end
        Puts " You Won!! "
    end

    def make_guess(pos)
        previou = self.board.reveal(pos)
        @previous_guess = 

    end

    def match?(pos1,pos2)
        self.board[pos1] == self.board[pos2]
    end

    def compare_guess

    end

end

