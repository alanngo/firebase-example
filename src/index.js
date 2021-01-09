import firebase from "firebase"
import CONFIG from './config.js'

firebase.initializeApp(CONFIG)
const DB = firebase.database()
DB.ref("students").on("value", 
res=>
{
    console.log(res.val())
},
err=> console.log(err))
