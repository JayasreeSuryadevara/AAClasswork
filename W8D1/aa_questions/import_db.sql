DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions_like;


PRAGMA foreign_keys = ON;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL
);

CREATE TABLE questions(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    subj_question_id INTEGER NOT NULL,
    parent_id INTEGER,
    user_id INTEGER NOT NULL,
    body VARCHAR(255) NOT NULL,

    FOREIGN KEY (subj_question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id)
);

CREATE TABLE questions_like(
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(fname, lname)
VALUES
  ('John', 'Doe'),
  ('George', 'Washington'),
  ('Joe', 'Shmoe');

INSERT INTO questions(title, body, author_id)
VALUES
  ('Question 1', 'Is this question 1?', (SELECT users.id FROM users WHERE fname = 'John' AND lname = 'Doe')),
  ('Question 2', 'Is this question 2?', (SELECT users.id FROM users WHERE fname = 'John' AND lname = 'Doe')),
  ('Question 3', 'Is this question 3?', (SELECT users.id FROM users WHERE fname = 'Joe' AND lname = 'Shmoe'));

INSERT INTO replies(subj_question_id, parent_id, user_id, body)
VALUES
((SELECT id FROM questions WHERE title = 'Question 1'), NULL, (SELECT users.id FROM users WHERE fname = 'John' AND lname = 'Doe'),'Test');

INSERT INTO replies(subj_question_id, parent_id, user_id, body)
VALUES
((SELECT id FROM questions WHERE title = 'Question 2'), 1, (SELECT users.id FROM users WHERE fname = 'Joe' AND lname = 'Shmoe'),'Test again');