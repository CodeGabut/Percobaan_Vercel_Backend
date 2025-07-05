const mongoose = require('mongoose');
const fs = require("fs") ;
const express = require('express') ; 
const path = require('path');
const app = express() ; 
const port = 3000 ; 


mongoose.connect("mongodb+srv://daffahaibanmuzakki:majalengkaraharja@cluster0.eimhiyd.mongodb.net/Percobaan").then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Connection error:", err));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


const mongoseSchema = new mongoose.Schema({
  nama: String , 
}) ; 

const misal = new mongoose.model('misal',mongoseSchema)

app.get('/', async (req, res) => {

let data = await misal.find()
console.log(data);

res.send(data) ; 
})


app.post('/', (req, res) => {
 console.log(req.body);
 res.send("jadi") ; 
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 




