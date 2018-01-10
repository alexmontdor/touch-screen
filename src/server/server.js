const express = require('express');
const path =  require ('path');

// App
var app = express();

if (process.env.NODE_ENV === 'development') {  
  app.use('/', express.static('/static'));
} 

/* else {
  app.use('/', express.static('node_modules/my-website-module/assets'));
} */
// Constants
const port = 3000;
//app.use(express.static(path.join(__dirname, '/../public')));
app.get('/', function (req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port);
console.log('Running on http://localhost:' + port);

