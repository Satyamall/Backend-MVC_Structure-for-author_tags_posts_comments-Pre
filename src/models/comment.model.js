
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        body: String,
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true
        },
        post: {
             type: mongoose.Schema.Types.ObjectId, 
             ref: "post",
            required: true
        },
        
    },
    { timestamps: true}
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;

