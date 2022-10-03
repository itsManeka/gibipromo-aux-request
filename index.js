require('dotenv').config()

const express = require('express')
const axios = require("axios");

const app = express()
const port = process.env.PORT || 8080;

app.get('/getdata', async function(req, res) {
    const url = decodeURIComponent(req.query.url);
    
    var response = null

    try {
        response = await axios.get(url);
        res.send({
            'data': response.data
        })
    } catch (err) {
        res.send({
            'erro': err
         })
    }
})

app.listen(port)
console.log('Server started at http://localhost:' + port);