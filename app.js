const express = require("express"); // khai su dung modul express
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.json({
        message: "Welcom to contact book application."
    });
});

module.exports = app;