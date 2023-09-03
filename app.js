const express = require('express'); //requiring express package
const app = express(); // storing it in app

app.set("view engine", "ejs");

app.get('/', (req,res)=>{
    res.render("home.ejs")
})

app.get('/about', (req,res)=>{
    res.send('<h1>about page</h1>')
})










app.listen(3000, ()=>{
    console.log("node js has started on 3000")
})