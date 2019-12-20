# MErge-sort without mutating the array
class Array
# a= [6,3,9,2]

    def merge_sort(&prc) # a <=> b

        new_arr = self.dup
        return new_arr if new_arr.length <= 1

        middle = new_arr.length / 2 #2 1

        left = new_arr.take(middle) # [6,3] [6] 
        sorted_left = left.merge_sort(&prc) 

        right = new_arr.drop(middle) # [9,2] [3] 
        sorted_right = right.merge_sort(&prc)

        merge(sorted_left,sorted_right,&prc) [2,9] [3,6]

    end

# helper method to merge back the left and right arrays

    def merge(left,right,&prc)

        prc ||= { |el1,el2| el1 <=> el2 }

        merged = []
        until left.empty? || right.empty?

            if prc.call(left.first,right.first) == 1
                merged << left.shift
            else
                merged << right.shift [2]
            end
        end

        merged + left + right [2,3,6,9]

    end

end

# flattens an array to a specified level
# if no input is given flatten the array to 1-d array
class Array
# [2,3,[[5],[[7]],6]] num = 1    [2,3,[5],[[7]],6]
# [2,3,[[5],[[7]],6]] num = nil  [2,3,5,7,6]
# [2,3,[4],5] num = 1

    def my_flatten(num=nil) #[4] num = 0

        flattened = []
        return *self if num == 0

        if num.nil?

            self.each do |el|
                if el.is_a?(Array)
                    flattened << el.my_flatten(num)
                end
                    flattened << el
                end
            end

        elsif num > 0

            self.each do |el|   # [2,3,[4],5]

                if el.is_a?(Array) 
                    flattened << el.my_flatten(num-1)
                else
                    flattened << el  #[2,3,[4],5]
                end

            end
        end

    end

end

# my_reduce with a given block
# accumulating the result of each el when passed thru the blk
# if accumulator is not given default to first el
#  [1,2,3,4].my_reduce() {|acc,el| el * 2 }
# [1,2].my_reduce(10) { |acc,el| el * 10 }
class Array

    def my_reduce( acc=nil, &prc) 

        if acc.nil?
            acc = self.first  # acc = 1
            arr = self[1..-1] # arr[2,3,4]
        else
            arr = self.dup # arr = [1,2]
        end

        arr.each do |el|  # 1 + 4 + 6 + 8 = 19 # acc = 10 + 10 + 20 = 40
            acc += prc.call(acc, el) # 4 6 8 # 10 20 
        end

        acc
    end

end

# mp string to see if a combination of its words
# makes the given str
# str = "cats are cool"
# str_rr = "cats"-0,"are"-1,"cool"-2
# compare_Str = cool are cats
class String

    def shuffled_sentence_detector(compare_str)

        str_arr = self.split(" ")

        str_arr.each_with_index do |word,i1| # are, 1
            temp_str = ""
            (i1+1..str_arr.length).each do |i2|  # 2
                if i2 == str_arr.length - 1
                    end_str = str[0..i1-1]
                else
                    end_str = str[i2..-1]
                end
                temp_str = str[i1...i2] + word + end_str # cool are 
                return true if temp_str.join(" ") == compare_str
            end
        end

        false
    end

end














































