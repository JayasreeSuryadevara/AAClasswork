class Array

    def my_uniq
        
        hash = Hash.new(true)

        self.each do |el|
            hash[el] = true
        end

        hash.keys
        
    end

    def two_sum
        pairs = []

        (0...self.length).each do |i|
            (i+1...self.length).each do |j|
                pairs << [i, j] if self[i] + self[j] == 0
            end
        end

        pairs
    end

    def my_transpose

        transposed = Array.new(self.length) { Array.new }

        (0...self.length).each do |i|
            (0...self.length).each do |j|
                transposed[j] << self[i][j]
            end
        end

        transposed

    end

    def stock_picker

        maxpi = self.index(self.sort.max)
        
        return [] if maxpi == 0
        
        temp_array = self[0...maxpi]

        minpi = temp_array.index(temp_array.sort.min)

        [minpi, maxpi]

    end

end