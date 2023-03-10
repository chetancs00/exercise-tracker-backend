const authMiddleware = require('./middleware/authMiddleware');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', false);
const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}, () => {
    console.log("MONGODB Server connected")
})

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth');
const fetchuser = require('./middleware/fetchuser');

app.get('/', (req, res) => {
    res.send("Welcome to our ToDo")
})

app.use('/users', userRouter)
app.use('/signup', authRouter)
app.use('/getuser', authRouter)
app.use('/exercises', exerciseRouter)
app.use('/api/notes', fetchuser, require('./routes/notes'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})