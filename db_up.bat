@ECHO OFF

SET SQLPATH= "C:\Program Files\MySQL\MySQL Server 8.0\bin"

SET PATH= "C:\Users\nxtlo\bootcamp\employee_tracker_project\db\"

SET DB_NAME= "company_mgmt"

SET DB_USER="root"

SET DB_PASSWORD= "Password#123"

CD "%SQLPATH%"

mysql --user=%DB_USER% --password=%DB_PASSWORD% -e "drop database if exists %DB_NAME%; create database %DB_NAME%;"
mysql --user=%DB_USER% --password=%DB_PASSWORD% %DB_NAME% < %PATH%\create_db.sql
mysql --user=%DB_USER% --password=%DB_PASSWORD% %DB_NAME% < %PATH%\seeds.sql