const express = require("express");

const app = express();

app.get("/add-student", (req,res) => {
    res.status(200).send();
})

app.listen(2311,()=> {
    console.log("Server is live.");
});