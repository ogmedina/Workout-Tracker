const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({ day: 1 })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        })
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
        { _id: req.params.id },
        { $push: {exercises: req.body } }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router