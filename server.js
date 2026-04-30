import express from 'express';
import sum from './sum.js';

const app=express();
const PORT=8000;


app.get("/home",(req,res)=>{
    res.send("I am working");
})

app.get("/sum/:a/:b",async(req,res)=>{
    const {a,b} = req.params;
    const result = sum(Number(a),Number(b));
    res.send(`The sum of ${a} and ${b} is ${result}`);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})