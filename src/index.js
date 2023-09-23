const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./configs/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.connect(db)
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:` + PORT)
});