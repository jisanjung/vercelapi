const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send({
        message: 'yo from vercel'
    });
});

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});