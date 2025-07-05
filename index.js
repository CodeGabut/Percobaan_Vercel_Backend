
const fs = require("fs") ;
const express = require('express') ; 
const path = require('path');
const app = express() ; 
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

let data = {
    misal  : "Dodi"
}

app.get('/', (req, res) => {
fs.writeFile('data.json',JSON.stringify(data), (data,error) =>{
console.log("Berhasilah pokok e") ; 
}); 
res.render('form.ejs') ; 
  
})
app.post('/', (req, res) => {
 console.log(req.body);
 res.send("jadi") ; 
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 




