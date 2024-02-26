const express = require("express");
const router = express.Router();
const Users = require('../models/userModel');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({
        message: "could not get users from db"
        });
    }
});
  
router.post('/add', async (req, res) => {
    try {
        const bodyObj = JSON.parse(req.apiGateway.event.body);
        const user = await Users.create(bodyObj);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
        message: "could not add users to db"
        });
    }
});

module.exports = router;