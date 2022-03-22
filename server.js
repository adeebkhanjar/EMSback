const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/api/v1/employee', require('./routes/employee.route'));
app.use('/api/v1/login', require('./routes/login.route'));


mongoose.connect('mongodb://localhost:27017/ems', { useNewUrlParser: true });

app.listen(5001, () => {
    console.log('Server started on port 5001');
});