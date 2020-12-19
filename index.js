const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const whole = require('./server/routes/whole');
const errors = require('./server/routes/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/whole', whole);
app.use('/api/errors', errors);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;