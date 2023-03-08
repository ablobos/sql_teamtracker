const db = require("./db/connect");
const express = require("express");
const startPolling = require("./lib/inquirer_handler")

const PORT = 3326; //MYsql PORT NUMBER SHOULD BE HARDCODED
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        startPolling();
    });
});

