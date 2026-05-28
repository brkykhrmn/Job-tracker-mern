const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/router');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)
app.use('/register', router)

app.listen(process.env.PORT);
