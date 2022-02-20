
const express = require('express');
const router = express.Router();
const Tag = require('../models/tag.model');


// Create a new tag
router.post("/", async(req,res)=>{
    const tag = await Tag.create(req.body);
    res.status(201).json({data: tag});
});

// Fetch all tags
router.get("/", async(req,res)=>{
    const tags = await Tag.find({}).populate("author").lean().exec();
    res.status(200).json({data: tags});
});

// Fetch a Single Tag By Id
router.get("/:id", async(req,res)=>{
    const tag = await Tag.findById(req.params.id).populate("author").lean().exec();
    res.status(200).json({data: tag});
});

// Update an existing Tag by Id
router.patch("/:id", async(req,res)=>{
    const tag = await Tag.findOneAndUpdate({ _id: req.params.id }, req.body,{
        new: true,
    }).lean().exec();
    res.status(200).json({data: tag});
});

// Delete a Single Tag By Id
router.delete("/:id", async(req,res)=>{
    const tag = await Tag.findOneAndRemove(req.params.id);
    res.status(200).json({data: tag});
});


module.exports = router;