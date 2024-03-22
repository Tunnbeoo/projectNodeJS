const express = require('express');
const app = express();

app.set('view engine', 'hbs'); // set up
app.set('view', './views');

app.get(' /*', (req, res) => {
    res.render('index');
})

// server start

app.listen(3000, () => {
    console.log(`server is runing at port ${port}`);
})