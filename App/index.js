const express = require('express');
const axios = require('axios'); 
const port = 8080;
const app = express();

app.get('/time', async (req, res) => {  
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(currentTime);
    
    try{
        res.send({ time: currentTime });
    }
    catch(error){
        res.status(500).send("couldn't send sorry!")
    }
});

app.listen(port, (error) => {  
    if (error) {
        console.log("Couldn't start the server.");
    } else {
        console.log(`Server is running on port ${port}!`);
    }
});
