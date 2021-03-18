import userServices from '../../services';
import { User, GenderEnum } from '../../models';

exports.addUser = (req, res) => {
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
    } else if (!req.body.pwd) {
        return res.status(400).send({
            success: 'false',
            message: 'salt missing'
        })
    }
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
        pwd: req.body.pwd,
        salt: req.body.salt
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
    const { id } = req.params;
    const ret = await userServices.getById(id);
    return res.status(200).send({
        success: 'true',
        user: ret.rows[0]
    })
}

exports.getMany = async (req, res) => {
    const ret = await userServices.getMany();
    return res.status(200).send({
        success: 'true',
        users: ret.rows
    })
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const userToUpdate = req.body as Partial<User>;
    userServices.updateById(id, userToUpdate);
    return res.status(200).send({
        success: 'true',
        messsage: `${id} successfully updated`
    })
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    userServices.deleteById(id);
    return res.status(200).send({
        message: `${id} successfully deleted`
    })
}