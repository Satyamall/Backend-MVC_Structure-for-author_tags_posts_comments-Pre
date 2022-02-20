

const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');


// Create a new post
router.post("/", async(req,res)=>{
    const post = await Post.create(req.body);
    res.status(201).json({data: post});
});

// Fetch all posts
router.get("/", async(req,res)=>{
    const posts = await Post.find({});
    res.status(200).json({data: posts});
});

// Fetch a Single post By Id
router.get("/:id", async(req,res)=>{
    const post = await Post.findById(req.params.id);
    res.status(200).json({data: post});
});

// Update an existing Tag by Id
router.patch("/:id", async(req,res)=>{
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body,{
        new: true,
    }).lean().exec();
    res.status(200).json({data: post});
});

// Delete a Single Tag By Id
router.delete("/:id", async(req,res)=>{
    const post = await Post.findOneAndRemove(req.params.id);
    res.status(200).json({data: post});
});


module.exports = router;