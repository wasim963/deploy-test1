const express = require('express');
const srv = express();

srv.get('/',(req,res) =>{
    res.send("Hello World");
});

srv.listen(1222, function () {
    console.log("Running on 1222");
});