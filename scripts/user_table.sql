\c mydebt;

create table if not exists users(
   id serial PRIMARY KEY,
   login varchar(50) UNIQUE NOT NULL,
   role integer REFERENCES roles
);
GRANT SELECT, UPDATE, INSERT, DELETE ON users TO temp_user;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO temp_user;