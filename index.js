const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello From AWS');
})

app.listen(PORT, () => {
    console.log("Server's up on", PORT);
})