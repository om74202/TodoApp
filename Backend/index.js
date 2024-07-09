const express=require("express");
const app=express()
const {todo}=require("./db")
const {createTodo,updateTodo}=require("./types");
app.use(express.json());
const cors=require("cors")
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors());



app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"wrong input "
        })
        return; 
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo has been created"
    })
})

app.get("/todos",async function(req,res){
    // const todos=await todo.find({});
    // res.json({
    //     todos
    // })
    res.json({
        todos: []
    })
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    console.log(parsePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"wrong input"
        })
        return;
    } 
    await todo.updateOne({
        _id:req.body._id
    },{
        completed:true
    })
    res.json({
        msg:"todo completed"
    })

})
app.listen(3000);