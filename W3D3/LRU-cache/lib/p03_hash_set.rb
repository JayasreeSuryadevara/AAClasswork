class HashSet
  attr_accessor :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    return false if include?(key)
    self[key.hash] << key
    self.count += 1
    resize! if self.count > num_buckets

    key
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    return nil unless include?(key)
    self[key.hash].delete(key)
    self.count -= 1
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = self.store
    self.count = 0
    self.store = Array.new(num_buckets * 2) { Array.new }
    old_store.flatten.each { |key| insert(key) }
  end
end
