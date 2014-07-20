/*jslint unparam: true, indent: 4 */
var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

module.exports = app;