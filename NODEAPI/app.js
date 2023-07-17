import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// const User = mongoose.model()
const app = express();

app.get("/" , (req ,res)=>{
    res.send("<h1>Hello World</h1>");
})

// app.post("/users/new" , async (req , res)=>{

//     const {name ,email ,password} = req.body;

//     await UserActivation.create({
//         name: "Amir",
//         email: "amirsohail@gmail.com",
//         password:"Amir"
//     })
// })

app.get("/users/all" , (req , res)=>{
    res.json({
        success:"true",
        users: [],
    })
})

app.listen(4000 , ()=>{
    console.log("Server is running on port 4000");
})