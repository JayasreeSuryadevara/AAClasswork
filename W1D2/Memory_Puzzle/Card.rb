class Card
    CARD_VALUES = ("A".."Z").to_a

    def self.shuffled_pairs(pair_count)
        values = CARD_VALUES.shuffle.take(pair_count) * 2
        values = values.shuffle!
        values.map { |value| Card.new(value) }
    end

    attr_reader :value
    attr_accessor :face_up

    def initialize(value,face_up = false)
        @value = value
        @face_up = face_up
    end

    def display_card
        if face_up == true
            return self.value    
        else
            return "?"
        end
    end

    def hide
        face_up = false
    end

    def reveal
        face_up = true
    end

    def revealed?
        self.face_up
    end

    def to_s
        face_up ? value.to_s : "?"
    end

    def ==(other_card)
        other_card.is_a?(self.class) && other_card.value == value
    end
end