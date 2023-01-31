const express = require("express");
const getPatients = require ("./src/patients/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hey!");
});


app.use("/api/v1/patients", getPatients );

app.listen(port, () => {
  console.log(`litening to port ${port}...`);
});
