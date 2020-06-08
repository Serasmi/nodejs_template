SET TIME ZONE 'Europe/Moscow';
CREATE USER temp_user WITH PASSWORD 'password';
CREATE DATABASE mydebt;
GRANT ALL PRIVILEGES ON DATABASE articles TO temp_user;