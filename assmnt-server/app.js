const express = require('express')
const cors = require('cors')
const Pitch = require('./models/pitchModel');
const summarize = require('./functions/summarize');
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.post('/api', async(req, res) => {
    try {
        //generate ids for pitch in an order
        const lastPitch = await Pitch.findOne({}, {}, { sort: { '_id': -1 } });
        const id = lastPitch ? lastPitch._id + 1 : 1;

        //call function to generate summary
        const summary = await summarize(req.body.text);

        //insert pitch into database
        const pitch = await Pitch.create({pitch_deck_text: req.body.text, pitch_deck_summary: summary, _id: id})
        res.status(201).json({summary: summary});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

module.exports = app;