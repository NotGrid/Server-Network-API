const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});
