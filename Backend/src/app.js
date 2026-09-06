const express = require('express');
const noteModel = require('./models/note.model');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.post("/create-note" , async (req,res)=>{
    const data = req.body;
    await noteModel.create({
        title:data.title,
        description:data.description,
    })
    res.status(201).json({
         message: "Note created successfully" ,
         note : data

     });
})
app.get("/notes" , async(req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched successfully",
        notes : notes
    })
})
app.delete("/delete-note/:id", async(req,res)=>{
    const id = req.params.id;
  const note = await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message:"note deleted successfully",
        note : note
    })
})
app.patch("/update-note/:id", async(req,res)=>{
    const id = req.params.id;
    const description = req.body.description ;
    const title = req.body.title ;
    const note = await noteModel.findOneAndUpdate({_id : id},{
        "title" : title ,
        "description" : description 
    })
    res.status(200).json({
            message: "note updated successfully",
            note : note ,
    })
})

module.exports = app;