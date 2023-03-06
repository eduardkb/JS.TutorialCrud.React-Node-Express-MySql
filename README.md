# JS-TutorCrudApp-Node.Express.MySql

## Project tutorial at:
    - https://www.bezkoder.com/react-node-express-mysql/

## API's    
    Methods	    Urls	                    Actions
    GET	        api/tutorials	            get all Tutorials
    GET	        api/tutorials/:id	        get Tutorial by id
    POST	    api/tutorials	            add new Tutorial
    PUT	        api/tutorials/:id	        update Tutorial by id
    DELETE	    api/tutorials/:id	        remove Tutorial by id
    DELETE	    api/tutorials	            remove all Tutorials
    GET	        api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'

## Starting Node App
    - npm init

## Dependencies
    - npm install express sequelize mysql2 cors --save