const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// serve static files
let options = {
    setHeaders(res) {
        res.setHeader('Cache-Control', 'public, max-age=0');
    }
};

app.use(express.static(path.join(__dirname, 'public'), options));

// router control
router.get('/', function(req, res) {
    res.send('im the home page!');
});

router.get('/hero', function (req, res) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=0'
    });
    res.send('Hello World!')
});

app.use('/', router);

// start the server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});