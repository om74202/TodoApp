const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ommishra74202:Om%40742002@clustertesting.ginulaa.mongodb.net/TodoDB")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("Todo",todoSchema);
module.exports={
    todo
}