const express = require("express");
const app = express();
app.use(express.json());

//add
const add = (a,b) => {
return a+b;
}
// function add(a,b){
//     return a+b;
// }
//subtract
const subtract = (a,b) => {
    return a-b;
}

//multiply
const multiply = (a,b) => {
    return a*b;
}

//divide
const divide = (a,b) => {
    return a/b;
}

// add(5,5);
app.get('/',(req,res) => {
    res.send('hii my name is nitesh')
})
// app.get('/add',(req,res) => {
//     // let num = req.body.abc;
//     let num3 = req.body.abc
//     let sum = 0;
//     for(let i=0;i<num3.length;i++){
//        sum += num3[i];
//     }
//     // let num2 = req.body.abd;
//     // let adds = add(num,num2);

//     res.send({'sum':sum}); 
// })
app.get('./addList',(req,res) => {
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers);
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += Number(numbers[i]);
    }
    res.send({sum});
})

app.get('/sub',(req,res) => {
    let num = req.body.abc;
    let num2 = req.body.abd;
    let subs = subtract(num,num2);
    res.send({'subs': subs})
})

//query
app.get('/add',(req,res) => {
   
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const num3 = Number(req.query.num3);
    if(isNaN(num1) || (num2) ||isNaN(num3)){
        console.log("not a valid input");
        res.status(400).send({error: "please provide valid input"})
    }
    const sum = num1+num2+num3;
    console.log(sum);
    res.send({'ans':sum});
})
app.get('./multiply',(req,res) => {
    let num = req.body.abc;
    let multi = multiply(num);
    res.send({'multi': multi})
})

app.get('./divide',(req,res) => {
    let num = req.body.abc;
    let divide = divide(num);
    res.send({'divide': divide})
})

let port = 3001;
let ip = "localhost";

app.listen(port,ip,() => {
    console.log("started listening");
})