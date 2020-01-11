DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;

CREATE TABLE cats (
  id SERIAL,
  name TEXT,
  color TEXT,
  breed TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE toys (
  id SERIAL PRIMARY KEY,
  price INT,
  color TEXT,
  name TEXT
);

CREATE TABLE cattoys (
  cat_id INT NOT NULL REFERENCES cats(id),
  toy_id INT NOT NULL REFERENCES toys(id),

  PRIMARY KEY (cat_id, toy_id)
);

INSERT INTO cats (name,color,breed)
VALUES 
    ('Tom','Black','abc'),
    ('Bob','White','Persian'),
    ('Jerry','Brown','Siamese'),
    ('LilBill','skin','Sphinx'),
    ('Babushka','Black','Russian');

INSERT INTO toys(price,color,name)
VALUES 
    (35,'black','ball'),
    (30,'white','spinner'),
    (50,'brown','mouse'),
    (24,'skin','yarn'),
    (12,'black','fish');

INSERT INTO cattoys(cat_id,toy_id)
VALUES
    (1,2),
    (1,3),
    (2,4),
    (3,5),
    (3,1),
    (4,2),
    (5,5);
    

