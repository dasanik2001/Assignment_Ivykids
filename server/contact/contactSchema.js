const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const contactDetails = mongoose.Schema(
    {

        uid: {
            type: String,
            required: [true, "uid is required"],
            trim: true,
            // unique: true,

        },
        contact: {
            type: Array,
            default: []
        }
    }
);

module.exports = mongoose.model("contactDetails", contactDetails);
