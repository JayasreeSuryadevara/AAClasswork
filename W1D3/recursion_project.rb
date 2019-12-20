require "byebug"
# def range(start,last) # iterative Version
#     (start...last).to_a 
# end

def range(start,last) # recursive Version
    return [] if start >= last
    [start] + range(start+1,last)
end
# p range(5,25)
# p range(-1,9)
# p range(3,2)

def exp(b,n) #First method
    return 1 if n == 0
    if n > 0
        b * exp(b,n - 1)
    else
        (1.0/b) * exp(b,n + 1) 
    end
end

def exp2(b, n)
  return 1 if n == 0

  if n % 2 == 0
    base = exp2(b, n / 2)
    base *= base
  else 
    base = exp2(b, ((n - 1) / 2)) # b = 4, n = 3
    base *= base
    b * base
  end
end

# p exp2(4,3)
# p exp2(4,4)
# p exp2(2,-1) # 1/2
# p exp2(3,-3) # 1/27 = 0.037
# 2 e 3 = 2 * 2 * 2
# 2 e -3 = 1/2 * 1/2 * 1/2

class Array

  def deep_dup
    return self if self.length <= 1
    self.map do |ele|
      if ele.is_a?(Array)
        ele.deep_dup
      else
        ele
      end
    end
  end

end

# p [1, [2], [3, [4]]].deep_dup

def fibonacci(n)
    return [0,1].take(n) if n <= 2
    fib_seq = fibonacci(n-1)
    last_ele = fib_seq[-1] + fib_seq[-2]
    fib_seq << last_ele
end

# p fibonacci(7)
# p fibonacci(2)

def bsearch(arr, target)
    return nil if arr.empty?
    mid_idx = arr.length / 2
    pivot = arr[mid_idx]
    return mid_idx if pivot == target
    if pivot > target
        bsearch(arr[0...mid_idx], target)
    else
        result = bsearch(arr[mid_idx + 1..-1], target)
        if result == nil
            nil
        else
            mid_idx + 1 + result
        end
    end
end


# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

class Array
    def merge_sort
        return self if self.length <= 1
        mid_idx = self.length / 2
        left,right = self[0...mid_idx],self[mid_idx..-1]

        left_merged = left.merge_sort
        right_merged = right.merge_sort

        sorted = []
        sorted += merge(left_merged, right_merged)
    end

    def merge(left, right)
        sorted = []
        until right.empty? || left.empty?
            if left.first > right.first
                sorted << right.shift
            else
                sorted << left.shift
            end
        end
        sorted + left + right
    end

    def subsets
      return [[]] if self.empty?
      split_arr = self[1..-1].subsets
      split_arr.concat(split_arr.map { |ele| [self[0]] + ele})
    end
    
end

# a = (1...12).to_a.shuffle
# p a
# p a.merge_sort

# p [1, 2, 3].subsets

def permutations(arr)
    return arr if arr.length <= 1
    perm = [arr]
    sub_perm = permutations(arr[1..-1])
    curr_el = arr[0]
    p sub_perm
    p " sub_perm #{sub_perm} "
    if sub_perm.length > 1

      sub_perm.each do |subArr|
        temp = []
        (0...subArr.length).each do |i|
          temp = subArr[0..i] + [curr_el] + subArr[i + 1..-1]
        end
        perm << temp
      end
    end
    # puts " sub_perm #{sub_perm} "
    # sub_perm.each do |subArr|
    #     subArr << curr_el
    #     perm << subArr
    # end
    # sub_perm << curr_el
    # perm << sub_perm
end

# p [1].permutation.to_a
a = [1, 2, 3]
p permutations(a)

#  sub_perm [3] 
#  sub_perm [[2, 3], [3, 2]] 
# [[1, 2, 3], [[2, 3], [3, 2], 1]]
