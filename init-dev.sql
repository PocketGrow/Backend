-- init.sql

-- Create a superuser with a password
CREATE USER test WITH SUPERUSER PASSWORD 'test';

-- Create a database and assign it to the superuser
CREATE DATABASE test33 WITH OWNER test;
