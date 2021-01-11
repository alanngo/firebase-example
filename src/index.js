import firebase from "firebase"
import CONFIG from './config.js'

firebase.initializeApp(CONFIG)
const DB = firebase.database()
const STUDENTS = DB.ref("students")
const PROF = DB.ref("professors")
