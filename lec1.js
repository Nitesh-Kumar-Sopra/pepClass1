const express = require('express');
const app = express();
app.use(express.json());


// console.log("hello world")
// let stri = ''

const fun =   (str)=>{
    let strlower = str.toLowerCase();
    let count =0;
    for(let i=0;i<strlower.length;i++){
        if(strlower[i] == 'a' || strlower[i] == 'e'  || strlower[i] == 'i'  || strlower[i] == 'o'  || strlower[i] == 'u'){
            // return stri += str[i];
            count++
        }
    }
    return count;
}

fun('aeinAnZEsns')

app.get('/countvowels', (req,res) => {
    let string = req.body.str;
    let vowels = fun(string)
    res.send({"vow":vowels});
})

const port = 3001;
const ip = "localhost";

app.listen(port,ip,() => {
    console.log("started lsitening")
})