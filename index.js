const express = require('express');
const app = express();

const PORT = 3000;

const users = [
    {id: 1, name: 'Aniket'},
    {id: 2, name: 'Sanket'},
    {id: 3, name: 'Vishal'}
]

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
});