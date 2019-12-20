class Array

    def my_each(&prc)
        self.length.times do |i|
            prc.call(self[i])
        end
        self
    end

    def my_select(&prc) # check solutions for how to use my_each here
        selected = []
        self.my_each { |el| selected << el if prc.call(el) }
        selected
    end

    def my_reject(&prc)
        rejected = []
        self.my_each { |el| rejected << el if !prc.call(el) }
        rejected
    end

    def my_any?(&prc)
        self.my_select(&prc).length > 0
    end

    def my_all?(&prc)
        self.my_select(&prc).length == self.length
    end

    def my_flatten # need to practice

        flattened = []

        self.each do |el|
            if !el.is_a?(Array)
                flattened << el   
            else
                flattened += el.my_flatten
            end
        end

        flattened
    end

    def my_zip(*args)

        merged = []
        
        (0...self.length).each do |i|
            sub_merged = []
            sub_merged << self[i]
            args.each do |arg|
                sub_merged << arg[i] #will result in nil if arg[i] doesn't exist
            end
            merged << sub_merged
        end
        merged

    end

    def my_rotate(n = 1)
        new_arr = self[0..-1]
        if n < 0 
            (n * -1).times do 
                temp = new_arr.pop
                new_arr.unshift(temp)
            end
        else
            n.times do
                temp = new_arr.shift
                new_arr.push(temp)
            end
        end
        new_arr
    end

    def my_join(str = "")
        new_str = ""
        self.each_with_index do |el,i|
            if i == self.length - 1
                new_str += el
            else
                new_str += el + str
            end
        end
        new_str
    end

    def my_reverse
        reversed = []
        i = self.length-1
        while i >= 0
             reversed << self[i]
             i -= 1
        end
        reversed
    end

end

def factors(n)

    factors = []

    (2...n).each do |fact|
        factors << fact if n % fact == 0
    end

    factors
end

class Array 
    def bubble_sort!(&prc)
        sorted = false
        while !sorted
            sorted = true
            (0...self.length-1).each do |i|
                if prc.call(self[i], self[i+1]) == 1
                    self[i],self[i+1] = self[i+1],self[i]
                    sorted = false
                end
            end
        end
        self
    end

    def bubble_sort(&prc)
        new_arr = self.dup
        new_arr.bubble_sort!(&prc)
    end
    
end

def substrings(str)
    substrs = []
    (0...str.length).each do |start|
        (start+1...str.length).each do |last|
            substrs << str[start..last]
        end
    end
    substrs
end

def subwords(word,dictionary)
    substrings(word).select { |el| dictionary.include?(el) }
end

def doubler(arr)
    arr.map!() {|el| el * 2}
end

class Array
    
    def my_map(&prc)
        new_arr = []
        (0...self.length).each do |i|
            new_arr << prc.call(self[i])
        end
        new_arr
    end

    def my_inject(&prc)
        acc = self[0]
        (1...self.length).each do |i|
            acc += prc.call(self[i])
        end
        acc
    end

end


def concatenate(str_arr)
    concat = ""
    str_arr.each do |str|
        concat += str + " "
    end
    concat
end
