const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
require('dotenv').config();
const userRouter = require('./routes/userRoutes');
const PORT = 5000;

// general middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/users', userRouter);

// db connect and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(PORT, () => {
        console.log(`server started on port: ${PORT}`);
    });
})
.catch(err => console.log(`mongodb error: ${err}`));