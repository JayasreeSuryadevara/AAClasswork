# Execution complexity : O(n^2)
# Compare every el to other el
def my_min(arr)
    cur_min = 0
    arr.each_with_index do |el1,i|
        cur_min = el1 if (0...arr.length).all? do |i2|
            el1 <= arr[i2]
        end
    end
    cur_min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# T: O(n^2) S: O(n)
# p my_min(list)

def my_min_2(list)
    current_min = 0
    list.each do |el|
        current_min = el if el < current_min
    end
    current_min
end

# T/S: O(n)
# p my_min_2(list)

def largest_contiguous_subsum(list)
    max_sum = 0
    sub_arys(list).each do |sub_ary|
        sum = sub_ary.sum
        max_sum = sum if sum > max_sum
    end
    max_sum
end


def sub_arys(ary)
    subs = []
    (0...ary.length).each do |i|
        (i...ary.length).each do |j|
            subs << ary[i..j] if !subs.include?(ary[i..j])
        end
    end
    subs
end

# list = [5, 3, -7]
# # T: O(n^2) S: O(n^2)
# p largest_contiguous_subsum(list)

# time complexity : O(n) space complexity : O(1)
def lcs(list)
    max_sum = 0
    cur_sum = 0
    list.each do |el|
        result = (cur_sum += el)
        max_sum = result if result > max_sum
    end
    max_sum
end

list = [5, 3, -7]
p lcs(list)