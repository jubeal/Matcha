const express= require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

const PORT = process.env["PORT"] ?? 2454;

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