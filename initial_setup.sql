CREATE DATABASE madhatter;

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    email VARCHAR,
    role VARCHAR
);

CREATE TABLE opportunities(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR,
    founder VARCHAR,
    est VARCHAR,
    industry VARCHAR,
    attachments VARCHAR,
    created_by INTEGER REFERENCES users(id),
    approved_by INTEGER REFERENCES users(id)
);

CREATE TABLE contact(
    id SERIAL NOT NULL PRIMARY KEY,
    phone VARCHAR,
    email VARCHAR,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    postal VARCHAR,
    country VARCHAR,
    website VARCHAR,
    linkedin VARCHAR,
    opp_id INTEGER REFERENCES opportunities(id)
);

CREATE TABLE founders(
    id SERIAL NOT NULL PRIMARY KEY,
    question VARCHAR,
    answer INTEGER,
    opp_id INTEGER REFERENCES opportunities(id)
);

CREATE TABLE legal(
    id SERIAL NOT NULL PRIMARY KEY,
    question VARCHAR,
    answer INTEGER,
    opp_id INTEGER REFERENCES opportunities(id)
);

CREATE TABLE opp_product(
    id SERIAL NOT NULL PRIMARY KEY,
    question VARCHAR,
    answer INTEGER,
    opp_id INTEGER REFERENCES opportunities(id)
);

CREATE TABLE financial(
    id SERIAL NOT NULL PRIMARY KEY,
    question VARCHAR,
    answer INTEGER,
    opp_id INTEGER REFERENCES opportunities(id)
);

CREATE TABLE main_score(
    id SERIAL NOT NULL PRIMARY KEY ,
    opp_id INTEGER REFERENCES opportunities(id),
    founders_score INTEGER REFERENCES founders,
    legal_score INTEGER REFERENCES legal,
    opp_product_score INTEGER REFERENCES opp_product,
    financial_score INTEGER REFERENCES financial,
    total_score INTEGER,
    status VARCHAR
);





