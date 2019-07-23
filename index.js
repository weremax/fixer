require('dotenv').config();
const express = require('express');
const app = express();
const port = 15000;
const path = require('path');
const getJWT = require('./server/auth/getJWT.js');

app.set('GET_JWT', process.env.GET_JWT);
app.set('REACT_APP_LOCAL', process.env.REACT_APP_LOCAL);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE' 
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Session.Token'
    );
    next();
});

app.get('/jwt', (req, res) => {
    let jwt = getToken(req);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))