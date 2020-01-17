require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # execute2 returns the query as array of hashes with the first element
    # being an array of column names
    # Return @column_names variable if already instantiated to not make a query
    return @column_names if @column_names

    column_names = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        "#{table_name}"
      LIMIT 
        1
    SQL

    @column_names = column_names.first.map!(&:to_sym)

  end

  def self.finalize!
    # Dynamically create attributes of self to create a hash
    # If @column_names is nil call self.columns to fill it
    @column_names ||= self.columns

    @column_names.each do |name|
      # getter attr
      define_method("#{name}") do
        @attributes[name]         # like hash[key]
      end

      # setter attr
      define_method("#{name}=") do |value|
        @attributes[name] = value   # like hash[key] = value
      end
    
    end

  end

  def self.table_name=(table_name)
    # Setter for table_name
    @table_name = table_name

  end

  def self.table_name
    # Getter for table_name
    # If table_name has already been instantiated return it
    # else create table_name from the Model name 
    # by using 'active_support/inflector' underscore(converts to snake_case)
    # and pluralize methods EX: "CatToy".underscore.pluralize => "cat_toys"
    @table_name ||= "#{self}".underscore.pluralize

  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    # lazily initialize @attributes to an empty hash in case it doesn't exist yet
    @attributes ||= {}

  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
