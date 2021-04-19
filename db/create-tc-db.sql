ALTER ROLE postgres WITH CREATEDB CREATEROLE;

\c postgres postgres;

CREATE ROLE gctalent WITH SUPERUSER LOGIN PASSWORD 'gctalent';
CREATE DATABASE gctalent
    WITH OWNER = "gctalent"
        ENCODING = 'UTF8'
        TABLESPACE = pg_default
        CONNECTION LIMIT = 25;
GRANT CONNECT, TEMPORARY ON DATABASE gctalent TO public;
GRANT ALL ON DATABASE gctalent TO gctalent;

\c gctalent gctalent;
