const bodyParser = require("body-parser");
const express =require("express");
const app=express();
app.use(bodyParser.json());

var port=3000;

const peopleRouter=require("./router/people");

app.use("/names",peopleRouter);
app.use("/post",peopleRouter);
app.use("/delete",peopleRouter);

app.listen(port,function(err){
    if(err)
    throw err;

    console.log("the port is"+port);
})