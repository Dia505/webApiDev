//importing package
const express = require("express");

const app = express();

//This line allows the data to be received from front end to server side
//middle-ware
app.use(express.json());

//get request and its response
app.get("/", (req, res) => {
    res.send("Hello");
});

//post request method in /data
app.post("/data", (req, res) => {

    //the json body that is sent to server will be displayed in front
    res.json(req, body);
    console.log(req.body);
})

const PORT = 5000;
app.listen(5000, () => {
    console.log("Server running on port ${PORT}")
})

//request and response headers handled by the browser automatically