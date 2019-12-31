require_relative "PolyTreeNode/lib/00_tree_node.rb"
class KnightPathFinder
    VALID_MOVES = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]]
    attr_reader :position
    
    def initialize(position)
        @kpf = KnightPathFinder.new([0, 0])
        @position = position
        move_tree(position)
    end

    def self.find_path(new_pos)
        parent = PolyTreeNode.new(@position)
        result_node = parent.dfs(new_pos)
        trace_back(result_node)
    end

    def trace_back(node)
        path = []

        path.unshift(node.value)
        parent_node = node.parent
        until parent_node.parent = nil
            path.unshift(parent_node.value)
        end
        path
    end

    def valid_pos(pos)
        x,y = pos
        return true if (0..7).include?(x) && (0..7).include(y)
        false
    end

    def possible_moves(current_pos)
        x1,y1 = current_pos
        poss_moves = []
        VALID_MOVES.each do |move|
            x2,y2 = move
            if valid_pos([x1+x2,y1+y2])
                poss_moves << [x1+x2,y1+y2]
            end
        end
        poss_moves
    end

private

    def move_tree(position)
        self.root = PolyTreeNode.new(position)
        child_nodes = []
        possible_moves(position).each do |child|
            child_obj = PolyTreeNode.new(child)
            child_obj.parent = self.root
            child_nodes << child_obj
            self.root.add_child(child_obj)
        end
    end
end


