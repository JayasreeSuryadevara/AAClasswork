class Maze

# Movements allowed for the solver
ALLOWED_MOVES = [[1,0],[-1,0],[0,1],[0,-1]]

# find the start index by looking for 'S'
# and end index by looking for 'E'
attr_reader :start_idx, :end_idx

    def initialize(filename)
        @map = load_map(filename)
        @title = parse_title(filename)
        @start_idx = find_start
        @end_idx = find_end
    end 

    # Load the map from the 'maze1.txt' file for a sample map
    def load_map(filename)
        maze = []

        File.open(filename).each_line do |line|
            chars = line.split(//)
            maze << chars
        end

        maze
    end

    # Parse the title of the maze:
    def parse_title(filename)
        filename.match(/(.+)\.txt/)[1]
    end

    # Find the start Index of the maze by looking for 'S'
    def find_start
        find_char("S")
    end

    # Find the end index of the maze by looking for 'E'
    def find_end
        find_char("E")
    end

    # Helper method to find a given char in the file
    def find_char(char)
        @map.each_with_index do |line,j|
            return [line.index(char), j] if line.include?(char)
        end
    end

    # Helper methods to do the actual traversal
    # You hit a wall if you find '*' in the given pos
    def is_wall?(position)
        row,col = position
        @map[row][col] == "*"
    end

    # size when we need to check the length of line
    def size
        @map.length
    end

    #Check if the given position is within the maze
    def in_maze?(position)
        row,col = position
        (0..size).include?(row) && (0..size).include?(col)
    end

    # To print the rquired output 
    def to_s
        str = "MAZE: #{@title} \n"
        @map.each do |line|
            str << line.join("")
        end
        str
    end

    def find_neighbors(position)
        x,y = position
        neighbors = []
        ALLOWED_MOVES.each do |i,j|
            neighbor = [(x + i ), (y + j)]
            if in_maze?(neighbor) && !is_wall?(neighbor)
                neighbors << neighbor
            end
        end
        neighbors
    end

    def travel_path(path)
        puts "Traveling path of #{path.inspect}..."
        copy_map = deep_dup(@map)
        path.each do |coords|
            x,y = coords
            point = copy_map[y][x]
            if point == "X"
                puts "This path back-tracks to #{x}, #{y}."
            elsif point == "*"
                puts "This path hits a wall at #{x}, #{y}."  
            else
                copy_map[y][x] = "X"
            end
        end
        show_path(copy_map)

    end

    def show_path(map)
        map.each do |line|
            puts line.join("")
        end
    end

    private

    def deep_dup(item)
        unless item.class == Array
            item.deep_dup
        else
            new_arr = []
            item.each do |el|
                new_arr << deep_dup(el)
            end
            new_arr
        end
    end

end # End of Maze Class

class MazeSolver

    def initialize(maze)
        @maze = maze
        reset_values
    end

    # Finds distance from a given position to the end of the maze
    def find_distance(position)
        row,col = position
        end_row, end_col = @maze.find_end
        ((row - end_row) + (col - end_col)).abs
    end

    def find_manhattan_estimate(point)
      dist_to_end = find_distance(point)
      dist_traveled = find_path(point).length
      f = dist_to_end + dist_traveled
    end

    # estimates dist. traveled and dist. to end,
    # picks point that should have minimum sum.
    # does not take diagonal moves into consideration.
    def manhattan_heuristic(queue)
      queue.inject do |chosen_point, point|
        old_f = find_manhattan_estimate(chosen_point)
        new_f = find_manhattan_estimate(point)
        old_f > new_f ? point : chosen_point
      end
    end

    # simple breadth first search; not really a heuristic.
    # included for comparison.
    def b_f_s(queue)
      queue.shift
    end

    def build_branching_paths(heuristic = :manhattan_heuristic)
      reset_values
      queue = [@current]
      visited = [@current]

      until queue.empty? || @current == @maze.find_end
        @current = self.send(heuristic, queue)
        queue.delete(@current)
        visited << @current
        #find open spaces nearby
        nearby_openings = @maze.find_neighbors(@current)
        #add them to queue
        nearby_openings.each do |neighbor|
          unless visited.include?(neighbor) || queue.include?(neighbor)
            queue << neighbor
            @branching_paths[neighbor] = @current
          end
        end
      end

      @branching_paths
    end

    def find_path(goal = @maze.find_end)
      path = [goal]
      spot = goal
      until @branching_paths[spot] == nil
        path << @branching_paths[spot] 
        spot = @branching_paths[spot]
      end
      path
    end

    def solve(heuristic = :manhattan_heuristic)
      build_branching_paths(heuristic)
      path = find_path
      @maze.travel_path(path)
    end

    private

    def reset_values
      @branching_paths = {}
      @current = @maze.find_start
    end

end


if __FILE__ == $PROGRAM_NAME
    filename = ARGV[0] || "maze1.txt"
    test_maze = Maze.new(filename)
    puts test_maze
    puts "Start is at #{test_maze.start_idx}"
    puts "End is at #{test_maze.end_idx}"
    test_solver = MazeSolver.new(test_maze)
    test_solver.solve
end