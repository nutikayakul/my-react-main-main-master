const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userdb')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

app.post('/api/user', async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(200).json({ success: true, message: 'User data saved' });
    } catch (error) {
        console.error('Error saving user data', error);
        res.status(500).json({ success: false, message: 'Error saving user data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});