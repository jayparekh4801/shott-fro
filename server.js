const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/ng-shott'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root : 'dist/ng-shott/'})
});

app.listen(process.env.PORT || 8080);