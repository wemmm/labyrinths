const express = require('express')
const pug = require('pug')
const app = express()

app.set('view engine', 'pug');
app.use(express.static('./public'));
app.use(express.static('../public'));

app.get('/', function (req, res) {
  res.render('index.pug');
})

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
    console.log("Jenny's lovely server is listening on port " + port);
});

module.exports = server;
