const express= require('express');

const app = express();
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
