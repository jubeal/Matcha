const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

import userServices from '../../services';
import { User, GenderEnum } from '../../models';

exports.addUser = async (req, res) => {
    console.log('addUser');
    console.log(req.body);
    if (!req.body.firstname) {
        return res.status(400).send({
            success: 'false',
            message: 'firstname missing'
        });
    } else if (!req.body.lastname) {
        return res.status(400).send({
            success: 'false',
            message: 'lastname missing'
        })
    } else if (!req.body.age) {
        return res.status(400).send({
            success: 'false',
            message: 'age missing'
        })
    } else if (!req.body.email) {
        return res.status(400).send({
            success: 'false',
            message: 'email missing'
        })
    } else if (!req.body.gender) {
        return res.status(400).send({
            success: 'false',
            message: 'gender missing'
        })
    } else if (!req.body.target) {
        return res.status(400).send({
            success: 'false',
            message: 'target missing'
        })
    } else if (!req.body.pwd) {
        return res.status(400).send({
            success: 'false',
            message: 'password missing'
        })
    }

    const { rows : users }: { rows: User[] } = await userServices.getMany();
    if (users.some((element) => {
        if (element.email === req.body.email) {
            return true;
        }
        return false;
    })) {
        return res.status(400).send({
            success: 'false',
            message: 'email already exist'
        })
    }

    const saltRounds = Math.floor(Math.random() * (15 - 5) + 5);
    const pwd = await bcrypt.hash(req.body.pwd, saltRounds);

    const user: User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email,
        tel: req.body.tel ? req.body.tel : undefined,
        gender: GenderEnum[req.body.gender],
        target: GenderEnum[req.body.target],
        lat: req.body.lat ? req.body.lat : 0,
        long: req.body.long ? req.body.long : 0,
        job : req.body.job ? req.body.job : undefined,
        jobLocation: req.body.jobLocation ? req.body.jobLocation : undefined,
        residency: req.body.residency ? req.body.residency : undefined,
        pwd: pwd,
    }
    if (user) {
        userServices.create(user);
        return res.status(200).send({
            success: 'true',
            message: 'user created'
        })
    } else {
        return res.status(500).send({
            success: 'false',
            message: 'failed to create the user'
        })
    }
}

exports.getUser = async (req, res) => {
    console.log('getUser');
    const { id } = req.params;
    console.log(await userServices.getById(id));
    const { rows: user }: { rows: User[] } = await userServices.getById(id);
    return res.status(200).send({
        success: 'true',
        user: user[0],
    })
}

exports.getMany = async (req, res) => {
    console.log('getMany');
    const { rows: users }: { rows: User[] } = await userServices.getMany();
    return res.status(200).send({
        success: 'true',
        users: users
    })
}

exports.updateUser = (req, res) => {
    console.log('updateUser');
    const { id } = req.params;
    const userToUpdate = req.body as Partial<User>;
    userServices.updateById(id, userToUpdate);
    return res.status(200).send({
        success: 'true',
        messsage: `${id} successfully updated`
    })
}

exports.deleteUser = (req, res) => {
    console.log('deleteUser');
    const { id } = req.params;
    userServices.deleteById(id);
    return res.status(200).send({
        success: 'true',
        message: `${id} successfully deleted`
    })
}

exports.login = async (req, res) => {
    const { email, pwd } = req.body;
    console.log(`Login: ${email}`);
    const { rows: user }: { rows: User[] } = await userServices.getByEmail(email);
    if (user.length) {
        const result = await bcrypt.compare(pwd, user[0].pwd);
        if (result){
            const token = jwt.sign(
                { id: user[0].id, email: user[0].email},
                process.env['JWT_SECRET'],
                { expiresIn: parseInt(process.env['EXPIRES_IN']) }
            );
            return res.status(200).send({
                success: 'true',
                message: 'successfully login',
                token,
            })
        } else {
            return res.status(400).send({
                success: 'false',
                message: 'incorect password'
            })
        }
    } else {
        return res.status(400).send({
            success: 'false',
            message: "email doesn't exist"
        })
    }
}