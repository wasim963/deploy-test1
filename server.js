const express = require('express');
const srv = express();
const SERVER_PORT = process.env.PORT || 1222


srv.get('/',(req,res) =>{
    res.send("Hello World!");
});

srv.listen(SERVER_PORT, function () {
    console.log("Server up and Running");
});