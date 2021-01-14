CREATE DATABASE IF NOT EXISTS listings;
USE listings;

-- CREATE TABLE IF NOT EXISTS homes (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   address VARCHAR(80),
--   neighbourhood VARCHAR(80),
--   city VARCHAR(80),
--   state VARCHAR(80),
--   price VARCHAR(80),
--   bedrooms INT,
--   bathrooms INT,
--   sqft VARCHAR(80),
--   realtor VARCHAR(80),
--   newTag TINYINT,
--   liked TINYINT,
-- );

-- CREATE TABLE IF NOT EXISTS tags (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   listingId INT,
--   new TINYINT,
--   liked TINYINT,
--   FOREIGN KEY (listingId)
--     REFERENCES listings(id)
-- );