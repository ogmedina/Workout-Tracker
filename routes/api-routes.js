//Require Model Schema
const db = require("../models");
//Express for routes
const express = require("express");
//Middleware for routes
const router = express.Router();

//Get workouts, aggregate has built in find function, adds field "totalDuration" that is the sum of the array in exercises labeled duration
router.get("/api/workouts", (req, res) => {
    console.log("finding all workouts?")
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            }
        }
    ]).then(data => {        
        console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });     
});

//Post Workouts after putting in the information in the body of the HTML and create
router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        })
});

//Put workouts by ID into the database by ID, $push places it into the array at exercises of what the body was
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: { exercises: req.body }
        },
        {
            new: true, runValidators: true
        }        
    ).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });    
});

//Put workouts into range with stats.html and has addFields to add the sum of the duration of exercises
router.get("/api/workouts/range", (req, res) => {
    console.log("finding all workouts with range?")
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            }
        }
    ])    
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    }); 
});


module.exports = router