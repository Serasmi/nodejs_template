SET TIME ZONE 'Europe/Moscow';
CREATE USER temp_user WITH PASSWORD 'password';
CREATE DATABASE node_template;
GRANT ALL PRIVILEGES ON DATABASE node_template TO temp_user;