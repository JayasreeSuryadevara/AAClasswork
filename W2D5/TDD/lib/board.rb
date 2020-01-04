
class Board

    attr_accessor :peg1, :peg2, :peg0 

    def initialize
        @peg0 = [4,3,2,1]
        @peg1 = []
        @peg2 = []
        @slate = [@peg0, @peg1, @peg2]
    end

    def move(from_idx, to_idx)
        if !(0..2).include?(from_idx) || !(0..2).include?(to_idx)
            raise "Please choose between 0 and 2"
        end

        raise "Can't move to the same peg" if from_idx == to_idx
            
        raise "Can't move from an empty peg!" if slate[from_idx].empty? 

        if slate[to_idx].empty? || slate[from_idx].last < slate[to_idx].last
            slate[to_idx] << slate[from_idx].pop
            return true
        else
            raise "The disc below is smaller"
        end
        
    end

    def won?
        winning_arr = [4,3,2,1]
        peg0.empty? && (peg1 == winning_arr || peg2 == winning_arr)
    end

private 

attr_reader :slate
end

# def MyError < RuntimeError

# end