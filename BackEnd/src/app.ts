const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http:è//localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Instantiating the express-jwt middle ware
const jwtMW = exjwt({
    secret: process.env["JWT_SECRET"],
    algorithms: ['sha1', 'RS256', 'HS256'],
});

const PORT = process.env.PORT ?? 2454;

app.post('/login', userRoutes.login);
app.post('/', userRoutes.addUser);
app.get('/', jwtMW, userRoutes.getMany);
app.get('/:id', jwtMW, userRoutes.getUser);
app.put('/:id', jwtMW, userRoutes.updateUser);
app.delete('/:id', jwtMW, userRoutes.deleteUser);

/*app.use(function(req, err, res, next) {
    if (err.name === 'UnauthorizedError') {
        // send the error rather than displaying it on the console
        res.status(401).send(err)
    } else {
        next(err);
    }
})*/

app.listen(PORT, () => {
    console.log(`Serveur listenning to port ${PORT}`);
});