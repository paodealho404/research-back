var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 4000
const ENV = process.env.NODE_ENV;
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// if(ENV === 'production')
// {
//   app.use(express.static(path.join(__dirname,'../front/build')));
//   app.use((req,res)=>{
//     res.sendFile(path.join(__dirname, '../front/build/index.html'));
//   })
// }
const Users = require('./routes/Users');
app.use('/users', Users);
const Routes = require('./routes/Class');
app.use('/course', Routes);

app.listen(port, function() {
  console.log('Server is running on port: ' + port);
})
