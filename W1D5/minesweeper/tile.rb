class Tile

    attr_reader :has_mine, :revealed

    # bomb = true if tile has a bomb
    # flagged = true if tile has neighbor bomb count
    # revealed = true if tile is revealed
    def initialize(has_mine=false,flagged=false)
        @has_mine = has_mine
        @flagged = flagged
        @revealed = false
    end

    def neighbor
        @falgged
    end
    
    def neighbor_bomb_count

    end

    def inspect
        @bomb.inspect
    end

end