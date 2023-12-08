const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//connect to mongodb database
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.connect(DB)
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

//start the server
app.listen(port, ()=> {
    console.log(`Node API app is running on port ${port}`)
});