require "board.rb"

describe Board do

    let(:board) {Board.new}

    describe "move" do

        it "moves one disk from one peg to another and checks if it is valid" do
            board.peg1 = [2]
            board.peg2 = [3]
            expect(board.move(1,2)).to eq(true)
        end

        it "checks if coordinates are within bounds" do
            expect(board.move(4, 2)).to raise_error("Please choose between 0 and 2")
        end

        it "checks if pegs are distinct" do
            expect(board.move(0, 0)).to raise_error("Can't move to the same peg")
            
        end

        it "checks if peg is empty" do
             board.peg1 = []
             expect(board.move(1, 2)).to raise_error("Can't move from an empty peg!")
        end

        it "checks if disc is bigger than the top disc of the new peg" do 
            board.peg2 = [5]
            board.peg1 = [2]
            expect(board.move(2, 1)).to raise_error("The disc below is smaller") 
        end

    end

    describe "won?" do

        it "check if won" do 
            board.peg0 = []
            board.peg1 = []
            board.peg2 = [4, 3, 2, 1]

            expect(board.won?).to eq(true)
            
        end 

        it "check if game is not won" do
            board.peg0 = [4, 3, 2, 1]
            board.peg1 = []
            board.peg2 = []

            expect(board.won?).to eq(false)
        end 

    end

end