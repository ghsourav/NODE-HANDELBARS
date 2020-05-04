var express = require('express');
var exphbs  = require('express-handlebars');
const port=3399;
const fs=require('fs');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


let result;

fs.readFile('./services.JSON','utf8',(err,data)=>{
    if(err){
        throw err;
    }else{
        result =JSON.parse(data);
    }
})

console.log(result)


app.get('/', (req, res)=> {
    res.render('home',{ title: 'Ghsourav - Home' });
});

app.get('/about', (req, res)=> {
    res.render('about',{ title: 'Ghsourav - About' });
});

app.get('/contact', (req, res)=> {
    res.render('contact',{ title: 'Ghsourav - Contact' });
});

app.get('/service', (req, res)=> {
    res.render('service',{ title: 'Ghsourav - Services', service:result });
});


app.listen(port,console.log(`NodeJS at ${port}`));