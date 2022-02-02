const express = require("express");

const app = express();

const port =  3200;

const orders=[{'id':1,'name':'pizza','price':350},{'id':2,'name':'burger','price':450}];


app.get('/get_orders',(req,res)=>{
    res.status(200).send(orders)
})

app.listen(port, () => {
  console.log(`running at port ${port}`);
});