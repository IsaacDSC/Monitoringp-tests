const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('healtcheck!');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send('ok');
})


app.listen(3333, () => {
    console.log('Server is running on port 3333');
})