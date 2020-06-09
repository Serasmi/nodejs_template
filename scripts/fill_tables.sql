\c node_template;

-- Create roles
insert into roles (name) values ('admin'), ('user');

-- Create users
insert into users (login, name, password, role) values ('admin', 'Admin', 'admin', 1), ('user', 'User', 'user', 2);