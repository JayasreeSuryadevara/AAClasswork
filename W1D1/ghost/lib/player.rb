
class Player

    attr_accessor :false_guesses

    def initialize(name)
        @name = name
        @false_guesses = 5
    end

    def guess
        puts " Please enter one letter as a guess: "
        guess = gets.chomp
        if !alert_invalid_guess(guess)
            raise " Invalid Guess " 
        else
            guess
        end
    end

    def alert_invalid_guess(guess)
        alpha = ("a".."z").to_a
        guess.length == 1 && alpha.include?(guess)
    end



end

