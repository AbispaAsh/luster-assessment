const mongoose = require('mongoose')

const pitchSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: false,
            default: 1,
        },
        pitch_deck_text: {
            type: String,
            required: [true, "Please enter pitch deck text"]
        },
        pitch_deck_summary: {
            type: String,
            required: [true, "Please enter pitch deck summary"]
        },
    },
    {
        timestamps: true
    }
)


const Pitch = mongoose.model('Pitch', pitchSchema);

module.exports = Pitch;