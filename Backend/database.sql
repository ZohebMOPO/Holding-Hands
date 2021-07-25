CREATE DATABASE hh;

CREATE TABLE volunteer(
    vol_id SERIAL PRIMARY KEY,
    vol_name VARCHAR(50),
    vol_about VARCHAR(255)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50),
    user_about VARCHAR(255)
);