const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userDetails = mongoose.Schema(
    {

        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
            unique: true,

        },
        password: {
            type: String,
            required: [true, "password is required"],
        }
    }
);

module.exports = mongoose.model("UserDetails", userDetails);
