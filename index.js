const express = require('express');
const cors =require ("cors");

const app = express();
app.use(cors());
const allServices =require('./data.json');

app.get('/',(req,res)=>{
    res.json({message:'hello server running'})
});
app .get("/allData",(req, res) =>{
res.send({allServices});
});

app.listen(5000, ()=>{
    console.log('server is running')
});