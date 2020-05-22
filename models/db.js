const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('Connection to MongoDB Atlas is successful');
})
.catch((error) => {
    console.log('Failed to connect to MongoDB Atlas');
    console(error);
});