\c node_template;

-- Roles table

create table if not exists roles(
   id bigserial not null primary key,
   name varchar(50) unique not null
);
create unique index roles_id_index on "roles" (id);
grant select, update, insert, delete on roles to temp_user;
grant usage, select on sequence roles_id_seq to temp_user;


-- User sessions
create table if not exists "user_sessions"(
    id varchar not null primary key,
    sess json not null,
    expire timestamp(6) not null
) with (OIDS=false);
create unique index sessions_id_index on "user_sessions" (expire);

-- Users table

create table if not exists users(
   id bigserial not null primary key,
   login varchar unique not null,
   name varchar,
   password varchar not null,
   role bigint references roles
);
create unique index user_id_index on users (id);
create unique index user_login_index on users (login);
grant select, update, insert, delete on users to temp_user;
grant usage, select on sequence users_id_seq to temp_user;