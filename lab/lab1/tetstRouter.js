var express = require('express');
var app = express();
const port = 3000;

// Route hiện tại

// Tạo route mới
app.get('/new-route', function (req, res) {
    res.send('<h1>Day la trang moi</h1>');
});

app.listen(port, function () {
    console.log('Ung dung dang chay o port ' + port);
});
