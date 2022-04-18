const express = require('express');
const app = express();

// app.use(logger);

app.get('/books' ,logger, (req,res) => {
       res.send(req.pathName2);
    // console.log("this is my books");
})

app.get('/libraries' ,CheckPermission, (req,res) => {
    res.send(req.pathData2)
    // console.log("this is our libraries");
})

app.get('/authors' ,CheckPermission, (req,res) => {
    res.send(req.pathData2)
    // console.log("my faviorite authors");
})

function logger(req,res,next){
    var pathName = req.route.path;
    req.pathName2 = {name : pathName};
    next()
}

function CheckPermission(req,res,next){
    var pathData = req.route.path;
    req.pathData2 = {name : pathData, CheckPermission:true};
    next()
}


app.listen(8004, () => {
    console.log("Listening on port 8004.");
})
