const express = require("express")
require("./db/conn")
const app = express();
const port = process.env.PORT || 3000 ;
const MensRanking = require("./models/mens");
const router = require("./routers/men")

app.use(express.json())

app.use(router)

app.listen(port , ()=>{
    console.log(`connection i slive at port no. ${port}`);
}) 