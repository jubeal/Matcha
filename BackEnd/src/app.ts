const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();

//Parse incoming request data
/*app.use(cors({
    origin: [
        'http://localhost:3000',
    ]
}));*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
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

//app.post('/login', userRoutes.login);
app.post('/', userRoutes.addUser);
app.get('/', userRoutes.getMany);
app.get('/:id', userRoutes.getUser);
app.put('/:id', userRoutes.updateUser);
app.delete('/:id', userRoutes.deleteUser);

app.listen(PORT, () => {
    console.log(`Serveur listenning to port ${PORT}`);
});

/*import { Console } from "console";

import UserServices from "./services";
import { User, GenderEnum } from "./models";

const gender = "MALE";

const user: User = {
    firstname: 'Jules',
    lastname: 'Béal',
    age: 22,
    email: 'j.bealleroux@gmail.com',
    tel: '0672644676',
    gender: GenderEnum[gender],
    target: GenderEnum.FEMALE,
    lat: 10,
    long: 50,
    job: 'développeur',
    jobLocation: 'Paris',
    residency: 'Paris'
}

//UserServices.create(user);
UserServices.getById(2)
            .then((res) => { 
    //for (let row of res.rows) {
        console.log(res);
    //}
 });*/