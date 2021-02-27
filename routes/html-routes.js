const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});    

module.exports = router;




// const path = require("path");


// module.exports = function(app) {

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     app.get("/stats", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });

//     app.get("/exercise", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });    

// };