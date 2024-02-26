const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://jason:dhlarry3@potholes.nucp7fb.mongodb.net/?retryWrites=true&w=majority&appName=potholes';

// general middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// const userSchema = mongoose.Schema(
//     {
//         id: Number,
//         name: String,
//         matched: Boolean
//     }
// );
// const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
  
// router.get('/', async (req, res) => {
//     try {
//         const users = await Users.find({});
//         res.status(200).json(users);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//         message: "could not get users from db"
//         });
//     }
// });
  
// router.post('/add', async (req, res) => {
//     try {
//         const bodyObj = JSON.parse(req.body);
//         const user = await Users.create(bodyObj);
//         res.status(200).json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//         message: "could not add users to db"
//         });
//     }
// });

// db connect and start server
mongoose.connect(MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(PORT, () => {
        console.log(`server started on port: ${PORT}`);
    });
})
.catch(err => console.log(`mongodb error: ${err}`));