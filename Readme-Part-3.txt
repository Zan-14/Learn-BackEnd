Part 3 BackEnd
Session 33 , Tuesday, 10 October 2023
git link: 
https://github.com/ffuad13/hms-saturday

- Instalasi SQL (SQL account in GDrive)
- Create new users for many developers mysql
- Try Postman
- HTTP method
- REST API

*VS Code extension for MySQL:
    MySQL by Weijan Chen

1. MySQL
    *Open MySQL command Line Client in windows (cannot directly open with gitbash, we must open another software called "MySQL command Line Client")

    // creating a new user in MySQL (enter for each line)
    *lowercase except user's password
        create user 'zan01'@'localhost' identified by 'ZanSQL-01'; 
        grant all privileges on *.* to 'zan01'@'localhost' with grant option;
        flush privileges;

    *Show the user list in mysql:
        select user from mysql.user;

    *Switch user in mysql
        system mysql -u username -p

    *Show the current user in mysql session:
        select user(),current_user();

    *Show the available databases:
        show databases;

    *Create a new database:
        create database projectname;

    *Close session or close the command line: (don't directly click X button)
        type "exit" in the terminal
    
    *Cut the process when we typo the syntax or just end the process:
        CTRL + C 


2. KnexJS
    *Installation:
        a. global
            npm i -g knex
        b. local or inside specific project
            npm i knex

    *How to check whether knex is installed
        a. global
            npm list --location=global
        b. local or inside specific project
            Check inside the package.json file inside dependencies

    *Install MySQL driver inside the project:
            npm i mysql2
        note: we can install the knex and mysql2 in one line command if we want:
            npm i knex mysql2 

    *Setup KnexJS (start from 46.30)
        1. Create a new folder inside src named knexmodel
            Note: even though there is a models folder already, we cannot place the knex config inside it. It will create an error in future class/lesson
