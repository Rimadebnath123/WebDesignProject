const express = require("express");
const app = express();
const fs=require("fs");
const path=require("path")
const port = 8000;


app.use('/static', express.static('static'))// '/static' URL For serving static files last static folder
app.use(express.urlencoded())


//PUB SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});