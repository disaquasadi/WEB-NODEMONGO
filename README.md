STEP 1: CREATE MONGO FOLDER

```mkdir -p data/db ```

STEP 2: FIND DIRECTORY OF THIS DB

```pwd``` (path, copy this into step 3)

STEP 3: SETUP MONGODB PATH

```mongod --dbpath =path```


NEWTAB-iNSERT, CREATE db

STEP 1: RunMongo (run in the same directory as dbpath)

```mongo```

STEP 2: create db

```use exam``` (exam is the db name)

STEP3: create Collection

```db.createCollection("course")```

ALL SYNTAX

INSERT: ```db.course.insert({"name": "hello","credit": 15})

FINDALL: ```db.course.find()

FIND by name: ```db.course.find({"name": "hello","credit": 15})


USING NODE JS CONNECT TO MONGODB

STEP 1: CREATE NODE FOLDER

STEP 2: CD TO NODE FOLDER AND OPEN TERMINAL

STEP 3: ```npm init```

STEP 4: OPEN NODE FOLDER IN VSC

STEP 5: CREATE A FILE NAME ```app.js```

STEP 6: copy this repo ```app.js``` into it

STEP 7: INSTALL IN TERMINAL WITH CD NODE FOLDER (STEP 1)

``` 
npm install express --save
npm install mongodb --save
npm install monk --save
npm install body-parser --save
```

STEP 8: ```node app.js``` to run the program (just like mvn jetty:run)
