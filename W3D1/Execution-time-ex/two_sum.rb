# Time: O(n^2) – quadratic
# Space: O(1)
def bad_two_sum?(ary, target)
    (0...ary.length).each do |i|
        (i+1...ary.length).each do |j|
            return true if ary[i] + ary[j] == target
        end
    end
    false
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

# time : O(nlogn)
# space: O(n)
def okay_two_sum?(ary, target)
    sorted = ary.sort
    i = 0
    j = sorted.length - 1
    while i < j
        case (sorted[i] + sorted[j]) <=> target
        when -1
            i += 1
        when 0
            return true
        when 1 
            j += -1
        end
    end
    false
end

# arr = [1, 0, 7, 5] 
arr = [1,5,0,6,-1,8,4]

# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

# def okay_two_sum_too?(arr,target)
#     sorted = ary.sort
#     until sorted.empty?

    
#     end

# end
#
# arr = [1, 0, 7, 5] 
# arr = [1,5,0,6,-1,8,4]
# p okay_two_sum_too?(arr, 6) # => should be true
# p okay_two_sum_too?(arr, 10) # => should be false

def hash_map?(ary, target)
    hash = Hash.new(0)
    ary.each { |el| hash[el] += 1 }
    hash.keys.each_with_index do |key,i|
        return true if hash.keys[i+1..-1].include?(target - key)
    end
    false
end

arr = [1,5,0,6,-1,8,4]
b = [0,2,1,-1,4,6,7,9]
p hash_map?(arr, 6) # => should be true
p hash_map?(arr, 10) # => should be true
p hash_map?(arr, 2) # => should be false
p hash_map?(b,2) # true