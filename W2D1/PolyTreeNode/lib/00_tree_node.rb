require "byebug"
class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)

        return if new_parent == self.parent

        if self.parent != nil
            self.parent.children.delete(self)
        end

        @parent = new_parent

        self.parent.children = self if self.parent != nil
        self
    end

    def children=(child_node)
        @children << child_node
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        if !children.include?(child_node)
            raise " Not a child of this node!"
        end
        child_node.parent = nil
    end

    def dfs(target)
        return self if self.value == target
        self.children.each do |child|
            found = child.dfs(target)
            return found if found != nil
        end
        nil
    end

    def bfs(target)
        queue = []
        queue << self
        until queue.empty?
            queue.each do |node|
                first = queue.first
                if first.value == target
                    return first
                else
                    parent = queue.shift
                    parent.children.each do |child|
                        queue << child
                    end
                end
            end
        end
    end
end