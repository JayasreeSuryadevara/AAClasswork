def first_anagram?(str1,str2)
    str1_ary = str1.chars.permutation.to_a
    str1_ary.include?(str2.chars)
end


# complexity: O(n!)
# space: O(n!)
# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str1,str2)
    s_ary = str2.chars
    str1.each_char do |char|
        chr_idx = s_ary.find_index(char)
        s_ary.delete_at(chr_idx) unless chr_idx.nil?
    end
    s_ary.empty?
end

# complexity: O(n^2)
# space: O(n)
# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str1,str2)
    str1.chars.sort == str2.chars.sort
end

# space complexity : O(logn)
# time complexity : O(n^2)
# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(str1,str2)
    str_to_hash(str1) == str_to_hash(str2)
end

def str_to_hash(str)
    hash = Hash.new(0)
    str.each_char do |char|
        hash[char] += 1
    end
    hash
end   

# space complexity : O(2)
# time complexity : O(n)
p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true
