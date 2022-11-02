--for help  \?

-- list database \l

-- show table in detail \d table_name

-- create database CREATE DATABASE database_name;

-- connect database \c database_name

-- CRUD in postgreSQL
CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5),
    on_sale boolean
);

INSERT TABLE products (id, name, price, on_sale) values (123, 'pizza', 300, 1);

SELECT * FROM products;



-- add column in data table
ALTER TABLE products ADD COLUMN featured boolean;

-- remove column in data tbale
ALTER TABLE products DROP COLUMN featured;

-- drop table
DROP TABLE products;

-- find tables on database \d

-- drop database
\c database_name; --connect to the other database
DROP DATABASE yelp_clone

