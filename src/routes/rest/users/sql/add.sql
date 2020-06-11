insert into "users" (login, name, password, role) values (${parameters:csv}) returning id;
