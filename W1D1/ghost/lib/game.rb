require_relative "player.rb"
# require_relative "dictionary.txt"

class Game

    DICTIONARY = IO.readlines("dictionary.txt", chomp: true)

    def initialize(name_1, name_2)
        @fragment = ""
        @player_1 = Player.new(name_1)
        @player_2 = Player.new(name_2)
        @current_player = @player_1
        @previous_player = @player_2
    end

    def play_round
        take_turn(@current_player)
        next_player!
    end

    def current_player
        @current_player
    end

    def previous_player
        @previous_player = @current_player == @player_1 ? @player_2:@player_1
        # turniary statement
        # (this variable) based on (if statement) yields "?" 1st if true : 2nd if false
        # a = c==a? true -> b:false -> a
    end

    def next_player!
        @current_player = @current_player == @player_1 ? @player_2:@player_1
        @previous_player = self.previous_player
    end

    def take_turn(player)
       
        cur_guess = player.guess
       
        if valid_play?(cur_guess)
           @fragment += cur_guess
        else

        end

    end

    def valid_play?(str)
        alpha = ("a".."z").to_a
        if DICTIONARY.include?(@fragment+str)
            @current_player.false_guesses -= 1
            return false
        elsif alpha.any? { |char| DICTIONARY.include?(@fragment+str+char) }
            return false
        end
    end

    def run
        while @current_player.false_guesses > 0 
            play_round
            if @current_player.false_guesses == 0
                puts "You Lose!!!!!!"
                puts " #{@previous_player.name} Wins! "
            end
        end
    end

end

p g = Game.new("P","J")


