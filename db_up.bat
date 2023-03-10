@ECHO OFF

SET SQLPATH= ""

SET PATH= ""

SET DB_NAME= "company_mgmt"

SET DB_USER="root"

SET DB_PASSWORD= "Password#123"

CD "%SQLPATH%"

mysql --user=%DB_USER% --password=%DB_PASSWORD% -e "drop database if exists %DB_NAME%; create database %DB_NAME%;"
mysql --user=%DB_USER% --password=%DB_PASSWORD% %DB_NAME% < %PATH%\create_db.sql
mysql --user=%DB_USER% --password=%DB_PASSWORD% %DB_NAME% < %PATH%\seeds.sql