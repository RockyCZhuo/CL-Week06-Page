let express = require("express");
let app = express();

let signs = {
    "data" : [
        {
            name: "avacado",
            year: "2021"
        },
        {
            name: "banana",
            year: "2022"
        },
        {
            name: "coconut",
            year: "2023"
        },
        {
            name: "dragonfruit",
            year: "2024"
        }
    ]
}

//http://localhost:3000 goes to index.html
//other html has to have name like:
//http://localhost:3000/coffee.html

app.use("/",express.static("public"));


app.get("/aboutme",(request,response)=>{
    response.send("I am Rocky");
})
app.get("/projects",(request,response)=>{
    response.send("Maybe here is the link to all projects");
})

app.get("/signs",(req,res)=>{
    res.send(signs);
})


//app.get('/sign/:signs',(req,res)=>{  
//a request parameter comes after'/:'
app.get('/signs/:sign',(req,res)=>{ 
    console.log(req.params.sign);
    let user_sign = req.params.sign;
    let user_obj;
    for(let i =0;i<signs.data.length;i++){
        if (user_sign == signs.data[i].name){
            user_obj = signs.data[i];
        } 
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    }else{
        res.json({status:"info not present"});
    }
})

// telling the server to run at port 3000
app.listen(3000, () => {
    console.log("app is listening at localhost:3000");
  })