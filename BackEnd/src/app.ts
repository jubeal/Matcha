const express= require('express');
const bodyParser = require('body-parser');

const app = express();

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env["PORT"] ?? 2454;

app.get('/test', (req, res) => {
    console.log('HELLO WORLD');
    console.log(req.header);
    const retObj = {
        title: 'status',
        desc: 'ceci est un test'
    }
    return res.status(200).send(retObj);
});

app.listen(PORT, () => {
    console.log(`Serveur listenning to port ${PORT}`);
})

/*import { Console } from "console";

import UserServices from "./services";
import { User, GenderEnum } from "./models";

const user: User = {
    firstname: 'Jules',
    lastname: 'Béal',
    age: 22,
    email: 'j.bealleroux@gmail.com',
    tel: '0672644676',
    gender: GenderEnum.MALE,
    target: GenderEnum.FEMALE,
    lat: 10,
    long: 50,
    job: 'développeur',
    jobLocation: 'Paris',
    residency: 'Paris'
}

UserServices.create(user);
UserServices.getMany()
            .then((res) => { 
    for (let row of res.rows) {
        console.log(row);
    }
 });*/