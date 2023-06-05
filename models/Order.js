const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        ref: "user",
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    course: {
        type: Object,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("order", orderSchema)