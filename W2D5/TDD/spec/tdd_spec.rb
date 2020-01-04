require "tdd.rb"

describe "my_uniq" do  
    let(:array) {[3, 4, 5, 5]}
    let(:return_array) {[3, 4, 5]}

    it "does not return original array" do 
        expect(array.my_uniq.object_id).not_to eq(array.object_id)
    end

    it "return array does not have duplicates" do
        expect(array.my_uniq).to eq(return_array)
    end
    
end

describe "two_sum" do
    let(:array) {[-1, 0, 2, -2, 1]}
    let(:result_array) {[[0,4],[2,3]]}
    let(:empty) {[1, 2, 3, 4]}

    it "returns the indices of pairs of elements that add to 0" do
        expect(array.two_sum).to eq(result_array)
    end

    it "return an empty array if there are no pairs" do
        expect(empty.two_sum).to eq([])
    end

end

describe "my_transpose" do

    let(:array) { [[0,1,2],[3,4,5],[6,7,8]] }
    let(:transpose) { [[0,3,6],[1,4,7],[2,5,8]]}
 
    it "only accepts square matrices " do
        expect(array.length).to eq(array.first.length)
    end

    it "transposes a square matrix" do
        expect(array.my_transpose).to eq(transpose)
    end

end

describe "stock_picker" do
    let(:stock_prices) {[40, 20, 10, 50, 74]}
    let(:stock_prices_2) {[40, 20, 74, 50, 10]}
    let(:sp3) { [5,4,3]}
    let(:best_picks) {[2, 4]}
    let(:best_picks2) {[1, 2]}

    it "finds the lowest and highest prices for days respectively" do
        expect(stock_prices.stock_picker).to eq(best_picks)
    end

    it "makes sure the highest price day is after lowest price day" do
        expect(stock_prices_2.stock_picker).to eq(best_picks2)
    end

    it "returns an empty array if max price if the first index" do
        expect(sp3.stock_picker).to eq([])
    end

end


