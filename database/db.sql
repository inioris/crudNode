-- Creating the DATABASE

CREATE DATABASE crudnode;

-- using the database

use crudnode;

-- creating a table

CREATE TABLE customer(
	id INT(11) UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	address VARCHAR(100) NOT NULL,
	phone VARCHAR(15)
);

-- Table show all tables

SHOW TABLES;

-- To Descripcion  the Table

Descripcion customer;



