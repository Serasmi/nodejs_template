\c mydebt;

-- Create roles
insert into roles (name) values ('admin'), ('user');

-- Create users
insert into users (name, role) values ('admin', 1), ('zoomer', 1), ('serasmi', 2);