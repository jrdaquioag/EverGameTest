const mongoose = require('mongoose');
const { Schema } = mongoose;

const SavedListSchema = new Schema({
    // Name, Img, Genre, Release Date
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    genre: {
        type: Array,
        default: ""
    },

    releaseDate: {
        type: Array,
        default: null
    },

    isReleased: {
        type: Boolean,
        default: false,
        required: true
    },

    companyName: {
        type: String
    },
    cover: {
        type: String
    },
    summary: {
        type: String
    }
})

const SavedList = mongoose.model("SavedList", SavedListSchema);

module.exports = SavedList;