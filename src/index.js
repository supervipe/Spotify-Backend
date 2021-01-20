var express = require('express');
var app = express();
var cors = require('cors'); 

const router = express.Router();

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

const musicaRoute = require ('./Routes/MusicaRoute.js')
const playlistRoute = require ('./Routes/PlaylistRoute.js')
const userRoute = require ('./Routes/UserRoute.js')



app.use(express.json());
app.use('/musicas', musicaRoute);
app.use('/playlist', playlistRoute);
app.use('/users', userRoute);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})