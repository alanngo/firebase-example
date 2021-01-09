<img src="./img/firebase.png" align="right" width="100">

# Firebase

## Database Structure

<img src="./img/structure.png" >

## NodeJS

### Prerequisites
```bash
$ npm init -y
$ npm install firebase
```

### Connect Firebase w/ your app
config.js
```javascript
const CONFIG = 
{
    apiKey: "INSERT API KEY HERE",
    authDomain: "INSERT AUTH DOMAIN HERE",
    databaseURL: "INSERT DB URL HERE",,
    projectId: "INSERT PROJECT ID HERE",,
    storageBucket: "hogwarts-a1a2d.appspot.com",
    messagingSenderId: "331243676435",
    appId: "INSERT APP ID HERE",,
    measurementId: "INSERT MEASUREMENT ID HERE"
};
export default CONFIG
```

index.js
```javascript
import firebase from "firebase"
import CONFIG from './config.js'

// initialize connection
firebase.initializeApp(CONFIG)

// get database
const DB = firebase.database()

// get collections
const COLLECTION = DB.ref("insert collection name here")

// additional collections inserted here
...
```
### Insert an entry
```javascript
COLLECTION.push
(
    {
        name:"omruti",
        favStuff: ["django", "literature", "tom and jerry", "spongebob"],
        hasRealComputer: false,
        favBook: "Harry Potter",
        studentNumber: 313
    }
)
```

### Find all 
```javascript
COLLECTION.on('value', 
res => 
{
    let results = res.val()
    // logic of result goes here
},
err =>
{
    console.log(err)
    // error handling logic goes here
})
```