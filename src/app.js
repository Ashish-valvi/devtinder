const express = require("express");
const app = express();
const port = 7000;

app.use("/test",(req,res)=>{
   res.send("this is a response from /test ")
})
app.use("/hello",(req,res)=>{
    res.send("this is a response from /hello ")
 })
app.listen(port,()=>{
    console.log(`server is rumming successfully on ${port}`)
});
