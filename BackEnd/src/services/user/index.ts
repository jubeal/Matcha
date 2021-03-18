import { User } from './../../models';
const { pool } = require('../../dbClient');

const create = async (user: User) => {
    const query = `SELECT EXISTS (
        SELECT *
        FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'users'
    );`;
    const client = await pool.connect();
    const exist = await client.query(query)
                            .catch(err => {
                                console.error(err);
                            });
    
    if (!exist.rows[0].exists) {
        console.log("creating users table");
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
            residency varchar,
            pwd varchar,
            salt varchar,
            );
        `;
        await client.query(queryCreate)
                                .catch(err => {
                                    console.error(err);
                                });
        console.log("Table users created");
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
        residency,
        pwd,
        salt
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
        '${user.residency}',
        '${user.pwd}',
        '${user.salt}
    )`;
    await client.query(queryAdd)
                            .catch(err => {
                                console.error(err);
                                client.end();
                                return ;
                            })
    client.end();
    console.log(`new user ${user.firstname}` + 
                ` ${user.lastname} created`);
};

const getById = async (id: number) => {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    const client = await pool.connect();
    const res = await client.query(query)
                            .catch(err => {
                                console.error(err);
                            });
    client.end();
    return res;
};

const getMany = async () => {
    const query = `SELECT * FROM users`;
    const client = await pool.connect();
    const res = await client.query(query)
                            .catch(err => {
                                console.error(err);
                            });
    client.end();
    return res;
};

const deleteById = async (id: number) => {
    const query = `DELETE from users WHERE id = ${id}`;
    const client = await pool.connect();
    await client.query(query)
                .catch(err => {
                    console.error(err);
                })
    client.end();
    console.log("User deleted");
};

const generateQuery = (user: Partial<User>, id: number) => {
    const queryContent = Object.entries(user).map(([key, value]) => {
        return `${key} = '${value}'`;
    });
    return `
        UPDATE users
        SET ${queryContent.join(', ')}
        WHERE id = ${id}
        `;
}

const updateById = async (id: number, user: Partial<User>) => {
    const query = generateQuery(user, id);
    const client = await pool.connect();
    await client.query(query)
                .catch(err => {
                    console.error(err);
                })
    client.end();
    console.log(`User number ${id} updated`);
};

export default { create, getById, getMany, deleteById, updateById};
