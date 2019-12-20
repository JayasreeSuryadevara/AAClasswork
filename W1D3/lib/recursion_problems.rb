#Problem 1: sum of the nos in the array

def sum_recur(array)
    return nil if array.empty?
    return array[0] if array.length == 1
    array[0] + sum_recur(array[1..-1])
end

# p sum_recur([1,5,2,6]) # 14
# p sum_recur([]) # nil
# p sum_recur([-1,5,-2,-7]) # -5
# p sum_recur([1]) # 1

#Problem 2: array includes? target

def includes?(array, target)
    return false if array.empty?
    array[0] == target || includes?(array[1..-1],target)
end

# p includes?([3,12,6,8], 6) # true
# p includes?([], 9) # false
# p includes?([-1,-3,-5,-7], -7) # true
# p includes?([1],0) #false

# Problem 3: No of times target occurs in the array

def num_occur(array, target) # test this later
    return 0 if array.empty?
    count = 0
    if array[0] == target 
        count += 1
    end
    count + num_occur(array[1..-1], target)
end

p num_occur([1,12,6,8,9,12,0,4], 12) # 2
p num_occur([], 3) # 0
p num_occur([1,0,1,0,5,9], 9) # 1

# Problem 4: no of consecutive pairs that add to 12

def add_to_twelve?(array)
    return false if array.length <= 1
    array[0] + array[1] == 12 || add_to_twelve?(array[1..-1])
end

# p add_to_twelve?([3,7,5,6,8,4,8]) # true
# p add_to_twelve?([1,2,3,4,5]) # flase
# p add_to_twelve?([]) # false

# Problem 5: recursively check if the array is sorted?

def sorted?(array)
    return false if array.empty?
    return true if array.length <= 1
    array[0] < array[1] && sorted?(array[1..-1]) 
end

# p sorted?([1,2,3,4,5]) # true
# p sorted?([3,7,5,6,8,4,8]) # false
# p sorted?([]) # false

# Problem 6: recursively reverse the string

def reverse(str)
    return "" if str.empty?
    str[-1] + reverse(str[0..-2])
end

# p reverse("bootcamp") # "pmactoob"
# p reverse("a") # "a"
# p reverse("test") # "tset"
# p reverse("") # ""
