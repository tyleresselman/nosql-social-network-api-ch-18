const express = require('express');
const db = require('./config/connection');


// const { User, Thought } = require('./models');

const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});