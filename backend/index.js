const express = require('express')
const app = express()

app.get('/hero', function (req, res) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})