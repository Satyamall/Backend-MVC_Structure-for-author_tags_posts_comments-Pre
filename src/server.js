
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const authorController = require('./controllers/author.controller');
const tagController = require("./controllers/tag.controller");
const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller");

app.use(cors());
app.use(express.json());

const connect = () =>{
    return mongoose.connect("mongodb://localhost:27017/relational")
}


app.use("/authors", authorController);
app.use("/tags", tagController);
app.use("/posts", postController);
app.use("/comments", commentController);


const start = async () =>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listen on port 5000");
    })
}

start();