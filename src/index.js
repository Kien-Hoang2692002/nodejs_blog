const express = require('express')
const path = require('path');
const handlebars = require ('express-handlebars');
var morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
   defaultLayout: 'main',
   extname: ".hbs" 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// Router
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

// 127.0.0.1 - localhost    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})