const express=require('express');
const app=express();
const port = process.env.PORT || 3000;
//run project from dist
app.use(express.static('dist'));
//get request
app.get('/page',(req,res)=>{
    console.log('user now on Page1');
    res.send("Page1")
})
app.listen(port,()=>console.log(`Task Running on port ${port}`));
