const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        matched: Boolean
    }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
module.exports = Users;