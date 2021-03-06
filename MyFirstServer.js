const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql=require("./db");
// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to web course example application."
    });
});
// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

// Create a route for getting all iceCreams 
app.get("/iceCreams", function(req, res) {
    sql.query("SELECT * FROM iceCreams", (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({ message: "error in getting all iceCreams: " + err });
            return;
        }
        console.log("got all iceCreams...");
        res.send(mysqlres);
        return;
    });
});