const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.get('/display', async (req, res) => {  
    try {
        const response = await axios.get("http://second-server:8080/time");
        res.render('index', { time: response.data.time });
    } catch (error) {
        console.error("Didn't send any data", error);
        res.status(500).send("Failed to send data");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/display`);
});
