


const express= require("express");
const cors=require("cors");
const dotenv = require("dotenv");

dotenv.config()



const port = process.env.PORT || 3000; 
const app = express();
const sum=require("./Math.js");

app.use(cors())

app.get("/",(req,res)=>res.json({Message : "server is started 💻🖥️🧑‍💻"}));

app.get("/home",(req,res)=>{
    res.send("home route 🏡🏠")
})

app.get("/fruits",(req,res)=>{
    res.json({
        fruits: "🥭🥭🍏🍎"
    })
})



app.get("/s",(req,res)=>{
    const v=req.query.value;
    const result = sum(v);
    res.json({
        sum: ` sum of ${v} natural numbers : ${result} ` 
    })
})



app.listen(port,()=>{
    console.log(`\n\t Server is runnig on the port : ${port }`)
});

