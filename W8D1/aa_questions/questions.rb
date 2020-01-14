require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Question
  attr_reader :id
  attr_accessor :author_id, :title, :body

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                questions
            WHERE
                id = ?
        SQL
        return nil unless question.length > 0

        Question.new(question.first)
    end

    def self.find_by_author_id(author_id)
       question = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT
                *
            FROM
                questions
            WHERE
                author_id = ?
        SQL
        return nil unless question.length > 0

        question.each { |el| Question.new(el) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def author
      User.find_by_id(author_id)
    end

    def replies
      Reply.find_by_question_id(self.id)
    end

end

class User

    attr_reader :id
    attr_accessor :fname, :lname

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map { |datum| User.new(datum) }
    end
    
    def self.find_by_name(fname,lname)
      user = QuestionsDatabase.instance.execute(<<-SQL, fname,lname)
      SELECT
      *
      FROM
      users
      WHERE
      fname = '?'
      AND
      lname = '?'
      SQL
      return nil unless user.length > 0
      
      User.new(user.first)
    end
    
    def self.find_by_id(user_id)
      user = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
      *
      FROM
      users
      WHERE
        id = ?
      SQL
      return nil unless user.length > 0
      
      User.new(user.first).fname
    end
    
    def initialize(options)
      @id = options['id']
      @fname = options['fname']
      @lname = options['lname']
    end
    
    def fname(user_id)
      raise "#{self} not in database" unless self.id
      user = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
      *
      FROM
      users
      WHERE
      id = ?
      SQL
      return nil unless user.length > 0
      User.new(user.first).fname
    end
    
    def authored_questions
      Question.find_by_author_id(id)
    end
    
    def authored_replies
      Reply.find_by_user_id(id)
    end
  end
  
  class QuestionFollow
    
  end
  
  class QuestionLike
    
  end
  
  class Reply
    attr_reader :id
    attr_accessor :subj_question_id, :parent_id, :user_id, :body

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map { |datum| User.new(datum) }
    end
    
    def self.find_by_user_id(user_id)
       reply = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                replies
            WHERE
                user_id = ?
        SQL
        return nil unless reply.length > 0

        Reply.new(reply.first)
    end

    def self.find_by_question_id(question_id)
       reply = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                *
            FROM
                replies
            WHERE
                subj_question_id = ?
        SQL
        return nil unless reply.length > 0

        reply.each { |el| Reply.new(el) }
    end

    def initialize(options)
      @id = options['id']
      @subj_question_id = options['subj_question_id']
      @parent_id = options['parent_id']
      @user_id = options['user_id']
      @body = options['body']
    end

    def author
      User.find_by_id(user_id)
    end

    def question
      Question.find_by_id(subj_question_id)
    end

    def parent_reply
      Reply.find_by_user_id(parent_id)
    end
end