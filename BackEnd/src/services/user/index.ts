import pg from 'postgresql';
import { User } from './../../models';
const { pool } = require('../../dbClient');

const create = async (user: User) => {
    const query = `SELECT to_regclass('postgres.users');`;
    const client = await pool.connect();
    const exist = await client.query(query)
                            .catch(err => {
                                console.error(err);
                            });
    console.log(exist);
    if (!exist.oid) {
        console.log("creation of users");
        const queryCreate = `
            CREATE TABLE users (
            id INT GENERATED ALWAYS AS IDENTITY,
            firstname varchar,
            lastname varchar,
            age int,
            email varchar,
            tel varchar,
            gender varchar,
            target varchar,
            lat float8,
            long float8,
            job varchar,
            jobLocation varchar,
            residency varchar
            );
        `;
        console.log(await client.query(queryCreate)
                                .catch(err => {
                                    console.error(err);
                                })
        );
    }
    const queryAdd = `
    INSERT INTO users (
        firstname,
        lastname,
        age,
        email,
        tel,
        gender,
        target,
        lat,
        long,
        job,
        jobLocation,
        residency
    )
    VALUES (
        '${user.firstname}',
        '${user.lastname}',
        '${user.age}',
        '${user.email}',
        '${user.tel}',
        '${user.gender}',
        '${user.target}',
        '${user.lat}',
        '${user.long}',
        '${user.job}',
        '${user.jobLocation}',
        '${user.residency}'
    )`;
    console.log(await client.query(queryAdd)
                            .catch(err => {
                                console.error(err);
                            })
    );
    client.end();
};

const getById = () => {

};

const getMany = () => {

};

const deleteById = () => {

};

const update = () => {

};

export default { create, getById, getMany, deleteById, update};

/*const query = `
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;*/

/*const query = `
INSERT INTO users (email, firstName, lastName, age)
VALUES ('j.bealleroux@gmail.com', 'Jules', 'Béal', 22)
`;*/

/*const query = `
SELECT *
from users
WHERE age<30
`;*/

/*const query = `
UPDATE users
SET age = 23
WHERE email = 'j.bealleroux@gmail.com'
`;*/

/*const query = `
DELETE from users
WHERE email = 'j.bealleroux@gmail.com'
`;*/